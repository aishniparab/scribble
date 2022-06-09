const webppl = require("./webppl/exec-webppl.js");
const express = require('express');

const app = express();

const port = 5000;

app.use('/', express.static('src'));
app.use('/node_modules', express.static('node_modules'));

app.get('/webppl', (req, res) => {
    webppl.call_webppl(req.query.code, (error, stdout, stderr) => {
        obj = { 'error': error, 'stdout': stdout, 'stderr': stderr};
        res.send(JSON.stringify(obj));
    });
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 