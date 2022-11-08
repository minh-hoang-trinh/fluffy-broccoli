const fs = require("fs");

const filesToUpdate = [".eslintignore", ".prettierignore"];

filesToUpdate.forEach((file) => {
  fs.copyFileSync(
    `./${file}`,
    `../../../${file}`,
    fs.constants.COPYFILE_FICLONE
  );
});
