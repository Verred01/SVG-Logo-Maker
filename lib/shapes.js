class Shape {
    constructor() {
      this.color = "";
    }
    setColor(colorVar) {
      this.color = colorVar;
    }
  }

  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="125" r="110" fill="${this.color}" />`;
    }
  }
  class Hexagon extends Shape {
    render() {
      return `<polygon points="150,0 285,63.75 285,186.25 150,250 15,186.25 15,63.75" fill="${this.color}" />`;
    }
  }

  class Star extends Shape {
    render() {
      return `<polygon points= "150,0 188,75 269,89 212,144 225,225 150,180 75,225 88,144 31,89 112,75" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Hexagon, Star };