function parseCount(parseItem){
    if (isNaN(parseItem)) {
      throw new Error('Невалидное значение');
    }
    return Number.parseFloat(parseItem);
  }
  
  function validateCount(parseItem){
    try{
        return parseCount(parseItem);
    } catch (error) {
        return error;
    } 

  }

  class Triangle {
    constructor(a, b, c){
      if ((a + b) < c || (c + b) < a || (a + c) < b){
        throw new Error('Треугольник с такими сторонами не существует')
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }

    get perimeter(){
      return this.a + this.b + this.c; 
    }

    get area(){
      let halfPerimeter = this.perimeter / 2;
      return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3));
    }
  }

  function getTriangle(a, b, c){
    try {
     return new Triangle(a, b, c); 
    } catch(error) {
      return Object.freeze({
        perimeter: "Ошибка! Треугольник не существует",
        area: "Ошибка! Треугольник не существует",
    })
    }
  }