console.log("javaScript is working");

function calculate(params) {
    var number = document.getElementById('number').value;

    function Factorial(number) {
        var fact = 1;
        for (var i = 2; i <= number; i++)
            fact = fact * i;
        return fact;
    }
    
    document.querySelector('#final-result').textContent = Factorial(number);
    // document.getElementById('result').value = Factorial(number);
    console.log("statement ended");
}