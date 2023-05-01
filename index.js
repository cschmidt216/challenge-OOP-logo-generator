import inquirer from 'inquirer';
import fs from 'fs';
import {build} from './lib/shapes.js'; 

// Define the prompts to ask the user
const prompts = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (input) => {
      if (input.length > 3) {
        return 'Please enter up to three characters.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (e.g. red or #FF0000):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (e.g. blue or #0000FF):',
  },
];

// Ask the user for input
inquirer.prompt(prompts).then((answers) => {
  // Build the SVG file using the user's input
  const svg = build(answers.text, answers.textColor, answers.shape, answers.shapeColor);

  // Save the SVG file to disk
  fs.writeFileSync('logo.svg', svg);

  // Output a success message to the console
  console.log('Generated logo.svg');
});