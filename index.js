const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Hexagon, Star } = require("./lib/shapes");

function writeToFile(fileName, answers) {
  let svgString = "";
  svgString =
    '<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";
  svgString += `${answers.shape}`;
  let shapeAnswer;
  if (answers.shape === "Circle") {
    shapeAnswer = new Circle();
    svgString += `<circle cx="150" cy="125" r="110" fill="${answers.shapeColor}"/>`;

  } else if (answers.shape === "Hexagon") {
    shapeAnswer = new Hexagon();
    svgString += `<polygon points="150,0 285,63.75 285,186.25 150,250 15,186.25 15,63.75" fill="${answers.shapeColor}"/>`;

  } else {
    shapeAnswer = new Star();
    svgString += `<polygon points= "150,0 188,75 269,89 212,144 225,225 150,180 75,225 88,144 31,89 112,75" fill="${answers.shapeColor}"/>`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="45" fill="${answers.textColor}">${answers.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Created logo.svg");
  });
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "What text do you want on your logo? (Enter up to three characters)",
        name: "text",
      },

      {
        type: "input",
        message:
          "Pick the color of the text. (Use a color keyword or a #hexadecimal number)",
        name: "textColor",
      },

      {
        type: "list",
        message: "What shape would you prefer the logo to be?",
        choices: ["Circle", "Hexagon", "Star"],
        name: "shape",
      },

      {
        type: "input",
        message:
          "Choose the color of the shape. (Use a color keyword or a #hexadecimal number)",
        name: "shapeColor",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        writeToFile("logo.svg", answers);
      }
    });
}

promptUser();