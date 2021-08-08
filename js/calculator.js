

function add() 
{
var a,b,c;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
c= a + b;
document.getElementById("answer").value= c;
}


function sub() 
{
var a,b,c;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
c= a - b;
document.getElementById("answer").value= c;
}


function mul() 
{
var a,b,c;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
c= a * b;
document.getElementById("answer").value= c;
}


function div() 
{
var a,b,c;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
c= a / b;
document.getElementById("answer").value= c;
}

