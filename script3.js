// Develop a set of classes in javascript for calculating the area and perimeter of various shapes, being with a base class shape that provides default methodes for area and perimeter calculation and includes subclasses like Circle, Ranctangle and Triangle. Each subclass should inherite from shape and override the area and perimeter calculation methods to provide accurate results for their respective shapes.//

// Base class Shape
class Shape {
    calculateArea() {
      throw new Error("Method 'calculateArea()' must be implemented in the subclass.");
    }
  
    calculatePerimeter() {
      throw new Error("Method 'calculatePerimeter()' must be implemented in the subclass.");
    }
  }
  
  // Subclass for Circle
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Subclass for Rectangle
  class Rectangle extends Shape {
    constructor(length, width) {
      super();
      this.length = length;
      this.width = width;
    }
  
    calculateArea() {
      return this.length * this.width;
    }
  
    calculatePerimeter() {
      return 2 * (this.length + this.width);
    }
  }
  
  // Subclass for Triangle
  class Triangle extends Shape {
    constructor(a, b, c, base, height) {
      super();
      this.a = a; // Side a
      this.b = b; // Side b
      this.c = c; // Side c
      this.base = base; // Base for area calculation
      this.height = height; // Height for area calculation
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  
    calculatePerimeter() {
      return this.a + this.b + this.c;
    }
  }
  

  const circle = new Circle(5);
  console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);
  
  const rectangle = new Rectangle(4, 6);
  console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);
  
  const triangle = new Triangle(8, 6, 5, 7, 10);
  console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);
  