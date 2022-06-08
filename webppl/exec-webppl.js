const { exec } = require("child_process");
const fs = require('fs');

function call_webppl(code, callback) {
    file = 'webppl_file' + new Date() + '_' + Math.random() + '.js';
    fs.writeFile(file, code, () => {
        exec("webppl '" + file + "'", (error, stdout, stderr) => {
            callback(error, stdout, stderr);
            fs.unlinkSync(file);
        })}
    );
}


// add the code below
module.exports = { call_webppl };