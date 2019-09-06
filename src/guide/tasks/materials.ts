const fse = require("fs-extra");
const watch = require("node-watch");
const dir = require("node-dir");

function createMaterials() {
  dir.files(`./src/materials`, (err, file) => {
    if (err) {
      throw err;
    }

    const mapper = [];
    file.map(materials => {
      const mat = materials.split("/");
      const map = {
        material: mat[2],
        path: `/${mat[4].split(".")[0]}`,
        type: mat[3],
        exportedComponent:
          mat[4].charAt(0).toUpperCase() +
          mat[4]
            .slice(1)
            .toLowerCase()
            .split(".")[0]
      };
      mapper.push(map);
    });

    const tree = {};

    for (let i = 0; i < mapper.length; i++) {
      if (file[i].includes(`.js`)) {
        if (!tree[mapper[i].material]) {
          tree[mapper[i].material] = [mapper[i]];
        } else {
          tree[mapper[i].material].push(mapper[i]);
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
    if (file[index].includes(".js", ".tsx", ".jsx")) {
      locationFragment += `export {${location.exportedComponent}} from "${file[
        index
      ].replace("src", ".")}";`;
    }
  });

  fse
    .outputFile("src/materials_index.js", locationFragment)
    .then(() => {
      console.log("Routes initialised!");
    })
    .catch(err => {
      console.error(err);
    });
}

watch("src/materials/", { recursive: true }, () => {
  createMaterials();
});

createMaterials();
