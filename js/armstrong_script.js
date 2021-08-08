function Armstrong() {
    let n, sum = 0,
        r, c, temp;
    n =document.getElementById("put_number");
if(n.value.trim()==""){
    alert("please enter the number");
}
else{
    n=n.value;
    temp = n;
    while (n > 0) {
        r = n % 10;
        c = r * r * r;
        sum = sum + c;
        n = parseInt(n / 10); // convert float into Integer
    }
    n = temp;
   
    if (n == sum) {

        document.getElementById("demo1").innerHTML = "Armstrong number";

    } else {
        document.getElementById("demo1").innerHTML = "Not Armstrong number";
    }

}
}

function Myclear() {

    document.getElementById("demo1").innerHTML = " ";
}

function Mystart() {
    document.getElementById("p1").innerHTML = " #include&ltstdio.h&gt";
    document.getElementById("p2").innerHTML = " #include&ltconio.h&gt";
    document.getElementById("p3").innerHTML = " void main()";
    document.getElementById("p4").innerHTML = "{";
    document.getElementById("p5").innerHTML = "int n,r,c,sum=0,temp;";
    document.getElementById("p6").innerHTML = ' printf("Enter n value :");';
    document.getElementById("p7").innerHTML = ' scanf("%d, &n");';
    document.getElementById("p8").innerHTML = " temp=n;";
    document.getElementById("p9").innerHTML = "  while(n>0)";
    document.getElementById("p10").innerHTML = " {";
    document.getElementById("p11").innerHTML = " r=n%10;";
    document.getElementById("p12").innerHTML = "c = r*r*r;";
    document.getElementById("p13").innerHTML = " sum=sum+c;";
    document.getElementById("p14").innerHTML = " n=n/10;";
    document.getElementById("p15").innerHTML = " }";
    document.getElementById("p16").innerHTML = " n=temp;";
    document.getElementById("p17").innerHTML = " if(n==sum)";
    document.getElementById("p18").innerHTML = " {";
    document.getElementById("p19").innerHTML = 'printf("Armstrong Number");';
    document.getElementById("p20").innerHTML = " }";
    document.getElementById("p21").innerHTML = " else";
    document.getElementById("p22").innerHTML = " {";
    document.getElementById("p23").innerHTML = 'printf("Not Armstrong number");';
    document.getElementById("p24").innerHTML = " }";
    document.getElementById("p25").innerHTML = " }";

}

// function Mynext(){
  
//     document.getElementById("p1").style.color = "#ff0000";
//     document.getElementById("pp").innerHTML = "This is the main function of the Program.";
//     return Mynext();
// }

var i = 1;
function buttonClick() {
    if(i==1){
    document.getElementById("p1").style.color = "#ff0000";
    document.getElementById("pp").innerHTML = "standard input output haeder preprocessor";
    }
    else if (i==2){
    document.getElementById("p2").style.color = "#130f40";
    document.getElementById("pp").innerHTML = "console input output haeder preprocessor";
    }
    else if (i==3){
        document.getElementById("p3").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = "default Entry point";
    }
    else if (i==4){
        document.getElementById("p4").style.color = "#130f40";
        document.getElementById("pp").innerHTML = "starting braces";
    }
    else if (i==5){
        document.getElementById("p5").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " variable declarations.";
    }
    else if (i==6){
        document.getElementById("p6").style.color = "#130f40";
        document.getElementById("pp").innerHTML = "asking for the value to enter";
    }
    else if (i==7){
        document.getElementById("p7").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = "Enter the value here";
    }
    else if (i==8){
        document.getElementById("p8").style.color = "#130f40";
        document.getElementById("pp").innerHTML = "assigning the value of n to temp variable";
    }
    else if (i==9){
        document.getElementById("p9").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " while loop starts here";
    }
    else if (i==10){
        document.getElementById("p10").style.color = "#130f40";
        document.getElementById("pp").innerHTML = " opening braces of while loop";
    }
    else if (i==11){
        document.getElementById("p11").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = "n%10 gives remainder which gets stored in variable r";
    }
    else if (i==12){
        document.getElementById("p12").style.color = "#130f40";
        document.getElementById("pp").innerHTML = "c has been assigned the cube of 'r' ";
    }
    else if (i==13){
        document.getElementById("p13").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = "updating the variable sum";
    }
    else if (i==14){
        document.getElementById("p14").style.color = "#130f40";
        document.getElementById("pp").innerHTML = "updating the value of variable n";
    }
    else if (i==15){
        document.getElementById("p15").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = "closing while braces";
    }
    else if (i==16){
        document.getElementById("p16").style.color = "#130f40";
        document.getElementById("pp").innerHTML = "assigning the temp variable to n";
    }
    else if (i==17){
        document.getElementById("p17").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = "if statement starts here";
    }
    else if (i==18){
        document.getElementById("p18").style.color = "#130f40";
        document.getElementById("pp").innerHTML = "if statement opening braces ";
    }
    else if (i==19){
        document.getElementById("p19").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " prints armstrong number if conditions get fulfilled ";
    }
    else if (i==20){
        document.getElementById("p20").style.color = "#130f40";
        document.getElementById("pp").innerHTML = "closing braces of if statement";
    }
    else if (i==21){
        document.getElementById("p21").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " else statement starts here";
    }
    else if (i==22){
        document.getElementById("p22").style.color = "#130f40";
        document.getElementById("pp").innerHTML = " else statement opening braces";
    }
    else if (i==23){
        document.getElementById("p23").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " if conditions not fulfilled then bydefault else statement executes";
    }
    else if (i==24){
        document.getElementById("p24").style.color = "#130f40";
        document.getElementById("pp").innerHTML = "  closing else statement braces";
    }
    else if (i==25){
        document.getElementById("p25").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = "main program closing braces";
    }

    document.getElementById('next').value = ++i;
}