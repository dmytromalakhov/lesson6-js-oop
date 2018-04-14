document.write('<h1>Loop\'s</h1>' + '<style> h1 { color: green } </style>');
function prn(val) {
    document.write(val + ', ');
}

for (let i = 100; i > 0; i--) {
    if (i % 2) {
        continue;
    }
    prn(i);
}

let correctData = false;
let someNum;
while (!correctData) {
    someNum = parseFloat(prompt('Enter a number'));
    if (!isNaN(someNum)) {
        correctData = true;
    }
}

let corectData = false;
let someeNum;
do {
    someNum = parseFloat(prompt('Enter a number'));
    if (!isNaN(someNum)) {
        corectData = true;
    }
} while (!corectData);