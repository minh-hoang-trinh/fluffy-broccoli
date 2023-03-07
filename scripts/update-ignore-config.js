const fs = require("fs");

const filesToUpdate = [".eslintignore", ".prettierignore", "commitlint.config.js"];

// replace existing files with new versions
filesToUpdate.forEach((file) => {
  fs.copyFileSync(
    `./${file}`,
    `../../../${file}`,
    fs.constants.COPYFILE_FICLONE
  );
});
