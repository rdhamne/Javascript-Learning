// const mobile = {
//     model : 'realme',
//     ram : 12,
//     rom : 256,
//     display : {
//         type : 'super amoled',
//         resolution : '1080p'
//     },
//     processor : 'dimensity 1200',
//     mode : 'off',
//     power : function (md){
//         this.mode = md;
//     }
// };

// class

class Car {
  constructor(name, colour, year) {
    this.name = name;
    this.colour = colour;
    this.year = year;
  }
}

let car1 = new Car("alto", "white", 2001);
console.log(car1["name"]);

let car2 = new Car("swift", "white", 2016);
console.log(car2["colour"]);

//
