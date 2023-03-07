const { execSync } = require('child_process');
const { existsSync } = require('fs');

const filesCommands = [
  ['./.husky/_/husky.sh', 'npx husky install'],
  ['./.husky/pre-commit', 'npx husky add .husky/pre-commit "npx lint-staged"'],
  ['./.husky/commit-msg', 'npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"']
 ]

 filesCommands.map(fileCommand => {
  if (!existsSync(fileCommand[0])) {
    global.console.log(fileCommand[1]);
    execSync(fileCommand[1]);
  }
 });
