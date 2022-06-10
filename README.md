# SCRIBBLE (Super Cool Really Important Beautiful Bodacious Language Envisage)

Probabilistic languages are useful tools to simplify code and reduce code size for complex statistical models, but from a practical perspective, they are not as accessible to target users as would be desired. Many ideal users do not come from a coding background, and many who do come from a background that does not include probabilistic features in their programming experience. We introduce SCRIBBLE, an intuitive visual GUI tool for probabilistic programming. SCRIBBLE is inspired by Scratch, which provides an interface to an object-oriented programming language for beginners to drag and drop code blocks. We aim for SCRIBBLE to give a simple interface for building a probabilistic program and a simple representation for the output of the probabilistic program. 

# Build Instructions

Installation:

`git clone https://github.com/turingtestaishni/scribble.git`

`sudo apt install npm`

`sudo npm install -g webppl`

`sudo npm install`

Running server:

`npm start`

Then go to http://localhost:5000/

# Dev Instructions

We use a second repository in order to work on our WebPPL generator. Our WebPPL generator is simply an edit to Blockly's built-in Javascript generator.

Clone this repository:

`git clone https://github.com/sjl1826/webppl-generator`

You will find our changes in the `blocks` and `generators/javascript` directories. You can make changes to these files, then build the repository with:

`npm run build`

Build files will appear in the `build` directory. You must copy them into the scribble's directory, `src/scripts`.

These are the files that must be copied after build:

```
webppl-generator/build/blockly_compressed.js
webppl-generator/build/blockly_compressed.js.map
webppl-generator/build/blocks_compressed.js
webppl-generator/build/blocks_compressed.js.map
webppl-generator/build/javascript_compressed.js
webppl-generator/build/javascript_compressed.js.map
```


