const { Circle, Hexagon, Star } = require("./shapes.js");

describe("Circle color test", () => {
    test("Circle test with a #00DB07 colored background", () => {
      const shape = new Circle();
      shape.setColor("#00DB07");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="125" r="110" fill="#00DB07" />'
      );
    });
  });

describe("Hexagon color test", () => {
  test("Hexagon test with a pink colored background", () => {
    const shape = new Hexagon();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<polygon points="150,0 285,63.75 285,186.25 150,250 15,186.25 15,63.75" fill="pink" />'
    );
  });
});

describe("Star color test", () => {
  test("Star test with a #FF9700 colored background", () => {
    const shape = new Star();
    shape.setColor("#FF9700");
    expect(shape.render()).toEqual(
      '<polygon points= "150,0 188,75 269,89 212,144 225,225 150,180 75,225 88,144 31,89 112,75" fill="#FF9700" />'
    );
  });
});

