#!./node_modules/.bin/esno

// The shebang above does work, but it requires every package to have
// tsm installed as a dev dependency
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import run from './pipeline';

export const cmd = yargs(hideBin(process.argv))
  .command(
    '$0 <lang> [tasks]',
    'Build an adaptor. You must pass in the adaptor name, and you may pass a list of build steps.'
  )
  .example('$0 http', 'build everything for http')
  .example('$0 http src ast', 'run src and ast builds for http')
  .demand('lang')
  .option('tasks', {
    array: true,
    description: 'src, ast, docs, dts',
  })
  .parse();

if (!cmd.tasks) {
  // TODO add all tasks here
  cmd.tasks = ['src', 'dts'];
}

run(cmd.lang, cmd.tasks);
