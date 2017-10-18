const fse = require("fs-extra");
const dir = require("node-dir");

dir.files(`./src/materials`, (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files);
});

fse.outputFile("tmp/materials/text.json", "Stuff")
    .then(() => {
        console.log("The file was saved!");
    })
    .catch(err => {
        console.error(err)
    });