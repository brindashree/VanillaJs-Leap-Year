var output = document.querySelector('#output');
var input = document.querySelector('#userinput');

var checkbtn = document.querySelector('#btn');

checkbtn.addEventListener("click", isLeapYear);



function isLeapYear() {
    var year = input.value;
    // console.log(year);
    
     

        if (year % 400 == 0) {
            output.innerText = 'You are born in a LEAP YEAR';
        }
        else if (year % 100 == 0) {
            output.innerText = 'You are NOT born in a LEAP YEAR';
        }
        else if (year % 4 == 0) {
            output.innerText = 'You are born in a LEAP YEAR';
        } else {
            output.innerText = 'You are NOT born in a LEAP YEAR';
        }
    
}