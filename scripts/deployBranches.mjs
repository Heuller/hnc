import { execSync } from 'node:child_process';

function run(cmd) {
  console.log(`\n▶ Executando: ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

const commitMsg = process.argv.slice(2).join(' ') || 'chore: sync deployment';

try {
  console.log('🚀 Iniciando pipeline de sincronização e deployment...');

  // 1. Commit na branch de trabalho ux/plano-v3
  run('git add index.html package.json .github/ vite.config.ts public/icons/ scripts/ src/ supabase/ docs/ *.md');
  
  // Verifica se há algo a comitar
  try {
    run(`git commit -m "${commitMsg}"`);
  } catch {
    console.log('ℹ️ Nada a comitar ou working tree limpa.');
  }

  // 2. Push ux/plano-v3
  run('git push origin ux/plano-v3');

  // 3. Sincroniza e envia main
  run('git checkout main');
  run('git merge ux/plano-v3 --no-edit');
  run('git push origin main');

  // 4. Sincroniza e envia master
  run('git checkout master');
  run('git merge main --no-edit');
  run('git push origin master');

  // 5. Retorna para ux/plano-v3
  run('git checkout ux/plano-v3');

  console.log('\n✅ Sincronização concluída com sucesso em todas as branches!');
} catch (err) {
  console.error('\n❌ Erro durante a sincronização:', err.message);
  process.exit(1);
}
