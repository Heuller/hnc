import { execFileSync } from 'node:child_process';

// Sincroniza as duas branches de publicação em uma única operação, sem force.
// --check valida o envio sem modificar branches remotas.
const modo = process.argv[2];
if (!['--check', '--publish'].includes(modo) || process.argv.length !== 3) {
  console.error('Uso: node scripts/publicarBranchesProducao.mjs --check | --publish');
  process.exit(1);
}

const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();
try {
  if (git('status', '--porcelain')) throw new Error('Faça commit dos arquivos prontos antes de publicar.');
  git('fetch', 'origin', 'refs/heads/main:refs/remotes/origin/main', 'refs/heads/master:refs/remotes/origin/master');
  const commit = git('rev-parse', 'HEAD');
  for (const branch of ['main', 'master']) {
    // Falha se a publicação perderia qualquer commit remoto.
    git('merge-base', '--is-ancestor', `origin/${branch}`, commit);
  }
  const args = ['push', '--atomic'];
  if (modo === '--check') args.push('--dry-run');
  args.push('origin', `${commit}:refs/heads/main`, `${commit}:refs/heads/master`);
  execFileSync('git', args, { stdio: 'inherit' });
  console.log(`${modo === '--check' ? 'Envio validado' : 'Branches sincronizadas'}: ${commit}`);
  console.log('Confirme também a publicação no domínio de produção; sucesso de build isolado não comprova atualização do site.');
} catch (error) {
  console.error('Publicação interrompida; nenhum envio forçado foi realizado.', error.message);
  process.exit(1);
}
