# Build Instructions

Installation:

`git clone https://github.com/turingtestaishni/scribble.git`

`sudo apt install npm`

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

# About

Probabilistic languages are useful tools to simplify code and reduce code size for complex statistical models, but from a practical perspective, they are not as accessible to target users as would be desired. Many ideal users do not come from a coding background, and many who do come from a background that does not include probabilistic features in their programming experience. We introduce SCRIBBLE, an intuitive visual GUI tool for probabilistic programming. SCRIBBLE is inspired by Scratch \citet{resnick2009scratch}, which provides an interface to an object-oriented programming language for beginners to drag and drop code blocks. We aim for SCRIBBLE to give a simple interface for building a probabilistic program and a simple representation for the output of the probabilistic program. Our group consists of members with the application development experience necessary to create this tool and we aim to match our skills to the needed development background of the project. In order to keep track of our project, we aim to first create our user interface and support minimal probabilistic features as a bare minimum (flip in Dice for example). From here, we can build up further features, including control flow, a wider variety of types, and more.

Our motivation behind this project is to provide a tool to introduce beginners to probabilistic languages and help beginners debug through visualizations of the output. We noticed that a majority of probabilistic languages are written as a functional language, which is much less intuitive for most people compared to imperative languages. In addition, avid users of probabilistic programming languages are typically in the natural and social science who wish for an easy interface to describe their statistical models and run inference on them. Since there are several probabilistic programming languages to choose from and adopt, it can become cumbersome for non-engineers to technically evaluate which programming language will work for their use-case and then learn the syntax for that language. Thus by providing a tool that visualizes the construction of the program and the output, it can help beginners learn how to use the probabilistic programming language and become more comfortable with functional languages. It will help reduce barrier to entry to probabilistic programming. Additionally, the visualization of the output could also be beneficial for advanced users of probabilistic programming languages to debug their programs. By the nature of the probabilistic languages, it is difficult to debug since there is no particular correct answer or any correct outcome. By providing a visual representation of the output, we hope that it can help programmers debug their programs more easily. 

This is an interesting project to us since we think that this tool would be useful for beginners like us and may even encourage more programmers to explore probabilistic programming since it is a topic that is mainly discussed and used in research. This also brings up many interesting open questions like what is the best visualization for probabilistic programming languages. Currently there is not a uniform or simple way to visualize a probabilistic language, so we think it would be very interesting and helpful to have a tool for people that are unfamiliar with probabilistic programming. This project also challenges us to think of visualizations for the output of probabilistic languages because unlike imperative languages, there is no singular output. 

# Technical Contribution
Our visual GUI tool is inspired by a visual programming language called Scratch where code blocks are represented by actual blocks that fit together if they are a valid sequence. One of our first challenges is how to represent our chosen PPL, WebPPL, a probabilistic programming language based on a subset of Javascript, through blocks. We must decide on an interface for the blocks as well as what the actual code inside it will be. We must also ensure that for blocks that fit together, all combinations represent a valid program. 

To aid in the construction of our tool, we will be utilizing a library called Blockly. The Blockly library is an extremely useful tool as we can use it to create custom blocks with our chosen programming language. Blockly already supports other languages such as Python, JSON, and Javascript. Since WebPPL is based on a subset of Javascript, we are hoping that it is compatible with Javascript. However, it does contain new syntax not available in Javscript such as flip. Therefore, in order to support a language that is not provided by Blockly, we will need to create a custom code block generator for WebPPL. Next, we need to determine how to run or execute the generated WebPPL code strings in our website. We are still exploring how to do this. 

So far, we have been discussing our technical contribution as to how we will be representing the WebPPL language itself in a visual GUI tool. Our project also tackles the challenge of how to visualize the output of a PPL in a way that is intuitive and helpful to the user. As our baseline goal, we decided to just represent the final outputs visually through graphs or figures. However, as a stretch goal, we are hoping to do a dynamic graphical visualization that would also act as a debugging tool. The dynamic graphical visualization would allow the user to step through each step and see how the graph changes depending on more random variables or conditionals being introduced throughout the program, which we think would be particularly helpful debugging. 

Overall, our pipeline consists of developing a WebPPL code block generator in Blocky, linking the Blocky WebPPL code blocks to WebPPL code strings, executing the generated code strings, and then displaying the output. 

# Measures of Success
There are several measures of success for SCRIBBLE. We plan to separate such measures into various stages of completion in order to quantify our contributions. We have separated the stages into the following: baseline, medium, and stretch.
1. Baseline: Our baseline measures indicate the minimum level of progress at the end of the quarter to be considered a success. We plan to support basic functionality of the probabilistic language such as flipping a coin and variable logic. At this point we should have a working UI web app that will be able to represent the language.
2. Medium: Our medium level of progress is the ability to support more of the probabilistic language features such as control flow and observe. At this point we should be able to simulate the Monte Carlo simulation.
3. Stretch: Our stretch goal would be to completely support a probabilistic language with our GUI app. We want to support most or all of the features, so that it can be a viable tool for beginners to use for their projects.

# Planning and Timeline
Milestones to hit: 
* Decide on which probabilistic programming language to use
* Decide on which parts of the language we want to implement/visualize (since we probably can’t realistically visualize/represent an entire probabilistic programming language) 
* Break down language into components to visualize 
* Decide on visual representation of the output 
* Create Web App / other type of application
* Build basic infrastructure of the application (defining sections: code blocks, code itself, visualization of code) 
* Link code blocks to actual code execution
* Visualize code output
* Test

We plan on independently thinking of design ideas and then coming together to make final design decisions. Then, we will split up the implementation of the application by sections. 
