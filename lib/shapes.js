// Shape class which uses a constructor to set the color
class Shape {
  constructor() {
    this.color = "";
  }

  // Method to set the color of the shape
  setColor(color) {
    this.color = color;
  }
}

// Circle class that extends Shape and renders based on current properties selected
class Circle extends Shape {
  render() {
    // Returns SVG code for a circle with the specified color
    return `<circle cx="70%" cy="70%" r="150" height="150%" width="150%" fill="${this.color}">`;
  }
}

// Square class that extends Shape and renders based on current properties selected
class Square extends Shape {
  render() {
    // Returns SVG code for a square with the specified color
    return `<rect x="50" y="35" width="200" height="200" fill="${this.color}">`;
  }
}

// Triangle class that extends Shape and renders based on current properties selected
class Triangle extends Shape {
  render() {
    // Returns SVG code for a triangle with the specified color
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`;
  }
}

// Exporting classes
module.exports = { Circle, Square, Triangle };
