document.write('<br><br>' + '<h1>Object\'s</h1>' + '<style> h1 { color: green } </style>');
function prn(val) {
    document.write(val + '<br>');
}

document.write('<p>My method of object</p>' + '<style> p { color: red } </style>');
let car = {};
car.make = 'Audi';
car.model = 'TT Cabrio';
car.color = 'red';
car.price = 50000;
car.beep = function(){
    prn(car.model + ': ' + 'beep');
}
car.beep();

document.write('<p>My method of object</p>' + '<style> p { color: red } </style>');
function beep () {
  prn(this.model + ': ' + 'Beep'); 
}
let auto = {};
auto.make = 'Hummer';
auto.model = 'H2';
auto.color = 'red';
auto.price = 50000;
auto.beep = beep;
auto.beep();

document.write('<p>Literal\'s object</p>' + '<style> p { color: red } </style>');
let Lanos = {
    make: 'ZAZ',
    model: 'Lanos',
    color: 'red',
    price: 50000,
    beep: beep
};
Lanos.beep();

document.write('<p>Constructor of object</p>' + '<style> p { color: red } </style>');
function Car(model, make, color) {
    this.model = model;
    this.make = make;
    this.color = color;
    this.beep = beep;
}

let McLaren = new Car('F1', 'McLaren', 'Red');
let Ferrari = new Car('F50', 'Ferrari', 'grey');
McLaren.beep();
document.write('<h4>or</h4>' + '<style> h4 { color: blue } </style>');
Ferrari.beep();

document.write('<p>Class for object</p>' + '<style> p { color: red } </style>');
class SuperCar {
    constructor (model, make, color) {
        this.model = model;
        this.make = make;
        this.color = color;
        this.beep = beep;
    }
}
let bugattiVeyron = new SuperCar('Veyron', 'Bugatti', 'black');
bugattiVeyron.beep();

document.write('<h4>or</h4>' + '<style> h4 { color: blue } </style>');
class SuperrCar {
    constructor (model, make, color) {
        this.model = model;
        this.make = make;
        this.color = color;
    } 
    beep() {
      prn(this.model + ': ' + 'Beep-beep');  
    }
}
let bugattiiVeyron = new SuperrCar('Veyron', 'Bugatti', 'black');
bugattiiVeyron.beep();

document.write('<p>Prototype of object</p>' + '<style> p { color: red } </style>');
let bugattiChiron = Object.create(bugattiiVeyron);
bugattiChiron.model = 'Chiron';
bugattiChiron.beep();