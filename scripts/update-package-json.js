const fs = require("fs");

const localPackageJson = require("../../../../package.json");
const templatePackageJson = require("../templates/package.json");

// update scripts section of local package.json with additional scripts from shared package.json
const extraScripts = Object.fromEntries(
  Object.entries(templatePackageJson.scripts).filter(
    ([key]) => !Object.keys(localPackageJson.scripts).includes(key)
  )
);
localPackageJson.scripts = {
  ...localPackageJson.scripts,
  ...extraScripts,
};

// update local package.json file
fs.writeFileSync(
  "../../../package.json",
  JSON.stringify(localPackageJson, null, 2)
);
