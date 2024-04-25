// Importing the shapes classes from the shapes module
const { Circle, Triangle, Square } = require("./shapes");

// Describe block for shape rendering tests
describe("Shape rendering", () => {
  // Test case for circle rendering
  test("Circle renders correctly", () => {
    const circle = new Circle();
    circle.setColor("");
    expect(circle.render()).toBe(
      '<circle cx="70%" cy="70%" r="150" height="150%" width="150%" fill="">'
    );
  });

  // Test case for triangle rendering
  test("Triangle renders correctly", () => {
    const triangle = new Triangle();
    triangle.setColor("");
    expect(triangle.render()).toBe(
      '<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="">'
    );
  });

  // Test case for square rendering
  test("Square renders correctly", () => {
    const square = new Square();
    square.setColor("");
    expect(square.render()).toBe(
      '<rect x="50" y="35" width="200" height="200" fill="">'
    );
  });
});
