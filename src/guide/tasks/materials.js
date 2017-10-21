const fse = require("fs-extra");
const watch = require("node-watch");
const dir = require("node-dir");

function createMaterials() {
    dir.files(`./src/materials`, (err, file) => {
        if (err) {
            throw err;
        }

        const mapper = [];

        file.map((materials) => {
            const mat = materials.split("/");
            const map = {
                material: mat[2],
                type: mat[3],
                items: [mat[4].split(".")[0]]
            };
            mapper.push(map);
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