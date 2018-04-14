document.write('<br><br>' + '<h1>Array\'s</h1>' + '<style> h1 { color: green } </style>');
function prn(val) {
    document.write(val + '<br>');
}

let cars = ['Bugatti Veyron', 'Ferrari F50', 'McLaren F1',
    'ZAZ Lanos'];
cars[7] = 'Tesla Model X';  

document.write('<p>prn(cars[7])</p>' + '<style> p { color: red } </style>');
prn(cars[7]);

document.write('<br><br>' + '<p>cars.length</p>' + '<style> p { color: red } </style>');
prn(cars.length);

document.write('<br><br>' + '<p>loop with undefined</p>' + '<style> p { color: red } </style>');
for (let i = 0; i < cars.length; i++) {
    prn(cars[i]);
}

document.write('<br><br>' + '<p>loop</p>' + '<style> p { color: red } </style>');
for ( let i = 0; i < cars.length; i++) {
    if (cars[i] === undefined) {
        continue;
    }
    prn(cars[i]);
}

document.write('<br><br>' + '<p>forEach</p>' + '<style> p { color: red } </style>');
cars.forEach(prn);

document.write('<br><br>' + '<p>forEach + function</p>' + '<style> p { color: red } </style>');
cars.forEach(function(el){
    prn(el);
});

document.write('<br><br>' + '<p>forEach + function + index</p>' + '<style> p { color: red } </style>');
cars.forEach(function(el, idx){
    prn(idx + ' ' + el);
});

document.write('<br><br>' + '<p>forEach + arrow function</p>' + '<style> p { color: red } </style>');
cars.forEach( el => prn(el) );

document.write('<br><br>' + '<p>forEach + arrow function + index</p>' + '<style> p { color: red } </style>');
cars.forEach( (el, idx) => prn(idx + " " + el) );

document.write('<br><br>' + '<p>Sorting forEach + arrow function + index</p>' + '<style> p { color: red } </style>');
cars.sort();
cars.forEach( (el, idx) => prn(idx + " " + el) );

document.write('<br><br>' + '<p>Reversing forEach + arrow function + index</p>' + '<style> p { color: red } </style>');
cars.reverse();
cars.forEach( (el, idx) => prn(idx + " " + el) );

document.write('<br><br>' + '<p>Uncorrect sorting numbers</p>' + '<style> p { color: red } </style>');
let nums = [10,30,3,1,11,17,80,100,59];
document.write('<h4>My array</h4>' + '<style> h4 { color: blue } </style>');
prn(nums);
nums.sort();
document.write('<br>' + '<h4>Uncorrect sorting of my array</h4>' + '<style> h4 { color: blue } </style>');
prn(nums);
document.write('<br>' + '<h4>Correct sorting of my array</h4>' + '<style> h4 { color: blue } </style>');
nums.sort( (a, b) => a - b );
prn(nums);
document.write('<br>' + '<h4>Reversing correct sorting of my array</h4>' + '<style> h4 { color: blue } </style>');
nums.sort( (a, b) => b - a );
prn(nums);
document.write('<br>' + '<h4>Join(" ") for my array</h4>' + '<style> h4 { color: blue } </style>');
nums.sort( (a, b) => b - a );
prn(nums.join(' '));