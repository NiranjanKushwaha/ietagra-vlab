console.log("javaScript is working");

function calculate(params) {
   
    var num1  =  document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;

    var number = parseInt(num1)+parseInt(num2);

    document.querySelector('#final-result').textContent = number;

    console.log("statement ended");
}