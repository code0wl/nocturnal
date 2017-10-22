const fse = require("fs-extra");
const watch = require("node-watch");
const dir = require("node-dir");
const concat = require("concat-files");
const fs = require("fs");

const allComponents = "./src/guide/all-components.js";
const fragments = "./src/guide/fragments.js";

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
                path: `/${mat[3]}`,
                type: mat[3],
                component: mat[3].charAt(0).toUpperCase() + mat[3].slice(1).toLowerCase(),
                items: [mat[4].split(".")[0]]
            };
            mapper.push(map);
        });

        concat(file, allComponents, (err) => {
            if (err) {
                throw err;
            }
        });

        fs.readFile(allComponents, "utf8", (err, data) => {
            if (err) {
                return console.log(err);
            }

            const result = data.replace(/import/g, '\nimport');

            console.log(result);

            fs.writeFile(fragments, result, "utf8", function (err) {
                if (err) return console.log(err);
            });
        });

        const tree = {};

        for (let i = 0; i < mapper.length; i++) {
            if (!tree[mapper[i].material]) {
                tree[mapper[i].material] = [mapper[i]];
            } else {
                tree[mapper[i].material].push(mapper[i]);
            }
        }

        const materialsJSON = {
            materials: [tree]
        };

        fse.outputJson("src/guide/materials.json", materialsJSON)
            .then(() => {
                console.log("The file was saved!");
            })
            .catch(err => {
                console.error(err)
            });
    });
}

watch("src/materials/", {recursive: true}, () => {
    createMaterials();
});

createMaterials();