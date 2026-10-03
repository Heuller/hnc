import { describe, it, expect } from 'vitest';
import fs, { type Dirent } from 'node:fs';
import path from 'node:path';

describe('Auditoria Automatizada de Segurança da Informação e DevSecOps', () => {
  const rootDir = path.resolve(process.cwd());

  it('não deve conter a senha de teste descontinuada em nenhum arquivo rastreado', () => {
    // String segmentada para não disparar falsos positivos em scanners estáticos de repositório
    const forbiddenStrings = ['teste' + '4344'];
    const filesToCheck = [
      'DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md',
      'DIRETRIZES_PROJETO.md',
      'README.md',
      'CREDITOS.md',
      '.env.example',
    ];

    filesToCheck.forEach((relPath) => {
      const fullPath = path.join(rootDir, relPath);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        forbiddenStrings.forEach((secret) => {
          expect(content).not.toContain(secret);
        });
      }
    });
  });

  it('nenhum arquivo do frontend deve utilizar dangerouslySetInnerHTML', () => {
    const srcDir = path.join(rootDir, 'src');

    function scanDir(dir: string) {
      if (dir.includes(path.sep + 'tests') || dir.endsWith('tests')) return;
      const entries = fs.readdirSync(dir, { withFileTypes: true }) as Dirent[];
      for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          scanDir(full);
        } else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
          const content = fs.readFileSync(full, 'utf-8');
          expect(content).not.toContain('dangerouslySetInnerHTML');
        }
      }
    }

    scanDir(srcDir);
  });

  it('todas as rotas da pasta api/ devem utilizar o header x-goog-api-key e nunca query param com chave', () => {
    const apiDir = path.join(rootDir, 'api');
    const apiFiles = (fs.readdirSync(apiDir) as string[]).filter((f: string) => f.endsWith('.ts'));

    expect(apiFiles.length).toBeGreaterThanOrEqual(4);

    apiFiles.forEach((file: string) => {
      const content = fs.readFileSync(path.join(apiDir, file), 'utf-8');
      // Proíbe chave na query string
      expect(content).not.toMatch(/generateContent\?key=/i);
      // Exige uso do header oficial x-goog-api-key
      expect(content).toContain("'x-goog-api-key': apiKey");
      // Exige cabeçalhos no-store e nosniff
      expect(content).toContain("res.setHeader('Cache-Control', 'no-store, max-age=0')");
      expect(content).toContain("res.setHeader('X-Content-Type-Options', 'nosniff')");
    });
  });

  it('o arquivo vercel.json deve conter os cabeçalhos de segurança HTTP recomendados pela OWASP', () => {
    const vercelConfigPath = path.join(rootDir, 'vercel.json');
    expect(fs.existsSync(vercelConfigPath)).toBe(true);

    interface VercelHeaderItem {
      key: string;
      value: string;
    }
    interface VercelHeaderBlock {
      source: string;
      headers: VercelHeaderItem[];
    }
    interface VercelConfig {
      headers?: VercelHeaderBlock[];
    }

    const config: VercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf-8'));
    expect(config.headers).toBeDefined();

    const globalHeaders = config.headers?.find((h) => h.source === '/(.*)');
    expect(globalHeaders).toBeDefined();

    const headerKeys = (globalHeaders?.headers || []).map((h) => h.key.toLowerCase());
    expect(headerKeys).toContain('x-content-type-options');
    expect(headerKeys).toContain('x-frame-options');
    expect(headerKeys).toContain('referrer-policy');
    expect(headerKeys).toContain('strict-transport-security');
    expect(headerKeys).toContain('permissions-policy');
  });

  it('as migrações do Supabase devem conter políticas explícitas de Row Level Security (RLS)', () => {
    const migrationsDir = path.join(rootDir, 'supabase/migrations');
    const migrationFiles = (fs.readdirSync(migrationsDir) as string[]).filter((f: string) => f.endsWith('.sql') && !f.includes('_down'));

    expect(migrationFiles.length).toBeGreaterThanOrEqual(2);

    migrationFiles.forEach((file: string) => {
      const content = fs.readFileSync(path.join(migrationsDir, file), 'utf-8');
      expect(content).toContain('ENABLE ROW LEVEL SECURITY');
      expect(content).toContain('CREATE POLICY');
      expect(content).toContain('auth.uid() = user_id');
    });
  });

  it('o arquivo .env.example não deve conter credenciais reais de produção', () => {
    const envExamplePath = path.join(rootDir, '.env.example');
    expect(fs.existsSync(envExamplePath)).toBe(true);
    const content = fs.readFileSync(envExamplePath, 'utf-8');

    expect(content).not.toContain('eyJ'); // Nenhum token JWT real
    expect(content).toContain('https://seu-projeto.supabase.co');
  });
});
