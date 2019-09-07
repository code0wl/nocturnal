const fse = require("fs-extra");
const watch = require("node-watch");
const dir = require("node-dir");
const yaml = require("js-yaml");
const fs = require("fs");

// Get document, or throw exception on error
const settings = async () => {
  const files = await yaml.safeLoad(
    fs.readFileSync("src/.nocturnal.yml", "utf8")
  );

  const componentsDirectory = files.settings.componentDirectory;
  watch(componentsDirectory, { recursive: true }, () => {
    createMaterials(componentsDirectory);
  });
  createMaterials(componentsDirectory);
};

settings();

function createMaterials(directory) {
  dir.files(directory, (err, file) => {
    if (err) {
      throw err;
    }

    const mapper = [];
    file.map(materials => {
      const mat = materials.split("/");
      const map = {
        material: mat[2],
        path: `/${mat[4].split(".")[0]}`,
        type: mat[4],
        exportedComponent:
          mat[mat.length - 1].charAt(0).toUpperCase() +
          mat[mat.length - 1]
            .slice(1)
            .toLowerCase()
            .split(".")[0]
      };
      mapper.push(map);
    });

    const tree = {};

    for (let item in mapper) {
      if (file[item].includes(".tsx", ".jsx")) {
        if (!tree[mapper[item].material]) {
          tree[mapper[item].material] = [mapper[item]];
        } else {
          tree[mapper[item].material].push(mapper[item]);
        }
      }
    }

    registerRoutes(file, mapper);

    const materialsJSON = {
      materials: [tree]
    };

    fse
      .outputJson("src/guide/materials.json", materialsJSON)
      .then(() => {
        console.log("JSON material tree created successfully!");
      })
      .catch(err => {
        console.error(err);
      });
  });
}

function registerRoutes(file, locations) {
  let locationFragment = ``;
  locations.map((location, index) => {
    if (file[index].includes(".tsx", ".jsx")) {
      locationFragment += `export {${
        location.exportedComponent
      }} from "./${file[index].replace("src/", "").replace(".tsx", "")}";`;
    }
  });

  fse
    .outputFile("src/materials_index.ts", locationFragment)
    .then(() => {
      console.log("Routes initialised!");
    })
    .catch(err => {
      console.error(err);
    });
}
