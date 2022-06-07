const express = require('express');

const app = express();

const port = 5000;

app.use('/', express.static('src'));
app.use('/node_modules', express.static('node_modules'));

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 