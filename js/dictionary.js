document.write('<br><br>' + '<h1>Dictionary</h1>' + '<style> h1 { color: green } </style>');
function prn(val) {
    document.write(val + '<br>');
}

document.write('<p>My dictinary</p>' + '<style> p { color: red } </style>');
let seasonCars = {};

seasonCars['Summer'] = 'Audi TT Cabrio';
seasonCars['Winter'] = 'Hummer H2';
seasonCars['Spring'] = 'Abrams A1';
seasonCars['Autumn'] = 'ZAZ Lanos';

prn(seasonCars['Summer']);
prn(seasonCars['Winter']);
prn(seasonCars['Spring']);
prn(seasonCars['Autumn']);

document.write('<br><br>' + '<p>Print my dictinary across key</p>' + '<style> p { color: red } </style>');
for ( let key in seasonCars){
    prn(seasonCars[key]);
}

document.write('<br><br>' + '<p>Quatity of elements in my dictinary</p>' + '<style> p { color: red } </style>');
let counter = 0;
for ( let key in seasonCars){
    counter++;
}
prn(counter);