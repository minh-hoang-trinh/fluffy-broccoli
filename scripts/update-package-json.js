const fs = require("fs");

const localPackageJson = require("../../../../package.json");
const templatePackageJson = require("../templates/package.json");

const sections = ['scripts', 'lint-staged'];

// update section of local package.json with additional section from shared package.json
sections.map(section => {
  if (localPackageJson[section] !== undefined) {
    const extraSection = Object.fromEntries(
      Object.entries(templatePackageJson[section]).filter(
        ([key]) => !Object.keys(localPackageJson[section]).includes(key)
      )
    );

    localPackageJson[section] = {
      ...localPackageJson[section],
      ...extraSection
    }
  } else {
    localPackageJson[section] = {
      ...templatePackageJson[section],
    }
  }
})

// update local package.json file
fs.writeFileSync(
  "../../../package.json",
  JSON.stringify(localPackageJson, null, 2)
);
