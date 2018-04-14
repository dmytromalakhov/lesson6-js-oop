document.write('<br><br>' + '<h1>Ternary operator</h1>' + '<style> h1 { color: green } </style>');
function prn(val) {
    document.write(val + '<br>');
}

function getAge(age) {
    // if (age >= 18) {
    //     return 'Adult';
    // } 
    // return 'Young';
    return age >= 18 ? 'Adult' 
            : age < 0 ? 'Incorrect' : 'Young';
}

prn(getAge(20));
prn(getAge(-20));
prn(getAge(2));