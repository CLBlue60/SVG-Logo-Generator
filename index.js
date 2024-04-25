// Importing required modules
const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function to generate SVG file
function writeToFile(fileName, answers) {
  let svgString =
    '<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";

  // Determine shape and add corresponding SVG element
  let shapeElement;
  switch (answers.shape) {
    case "Triangle":
      shapeElement = `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
      break;
    case "Square":
      shapeElement = `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
      break;
    case "Circle":
      shapeElement = `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
      break;
    default:
      console.log("Invalid shape.");
      return;
  }
  svgString += shapeElement;

  // Add text element
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

  svgString += "</g>";
  svgString += "</svg>";

  // Write SVG file
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// Function to prompt user for input
function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Choose SHAPE COLOR (Enter color OR a hex number)",
        name: "shapeBackgroundColor",
      },
      {
        type: "input",
        message: "Choose TEXT (Enter up to 3 characters)",
        name: "text",
      },
      {
        type: "input",
        message: "Choose TEXT COLOR (Enter color OR a hex number)",
        name: "textColor",
      },
    ])
    .then((answers) => {
      // Check text length
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        // Generate SVG file
        writeToFile("logo.svg", answers);
      }
    });
}

// Call the promptUser function to start the application
promptUser();
