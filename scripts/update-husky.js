const { execSync } = require('child_process');
const { existsSync } = require('fs');

// ===========
// File paths.
// ===========

const FILE_COMMIT = './.husky/pre-commit';
const FILE_COMMIT_MESSAGE = './.husky/commit-msg';
const FILE_HUSKY = './.husky/_/husky.sh';

// =========
// Commands.
// =========

const CLI_COMMIT = 'npx husky add .husky/pre-commit "npx lint-staged"';
const CLI_COMMIT_MESSAGE = 'npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"';
const CLI_HUSKY = 'npx husky install';

// ==============
// Husky install.
// ==============

if (!existsSync(FILE_HUSKY)) {
  global.console.log(CLI_HUSKY);
  execSync(CLI_HUSKY);
}

// ====================
// Add commit-msg hook.
// ====================

if (!existsSync(FILE_COMMIT_MESSAGE)) {
    global.console.log(CLI_COMMIT_MESSAGE);
    execSync(CLI_COMMIT_MESSAGE);
  }

// ====================
// Add pre-commit hook.
// ====================

if (!existsSync(FILE_COMMIT)) {
    global.console.log(CLI_COMMIT);
    execSync(CLI_COMMIT);
  }