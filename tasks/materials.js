const fse = require("fs-extra");
const dir = require("node-dir");

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
            name: mat[4]
        };
        mapper.push(map);
    });

    fse.outputJson("src/guide/materials.json", mapper)
        .then(() => {
            console.log("The file was saved!");
        })
        .catch(err => {
            console.error(err)
        });
});