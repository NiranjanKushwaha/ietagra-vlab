function EvenOdd() {
    var a = document.getElementById("getdata").value;
    if (a.trim() == "") {
        document.getElementById("getdata").style.border = "2px solid red";
    } else {
        document.getElementById("getdata").style.border = "2px solid green";
        var number = a;
            
            if(number!=0)
            {
                if(number%2 === 0){
                document.getElementById("output").innerHTML = "Your Entered number is Even: " + number;
                }
                else
                {
                    document.getElementById("output").innerHTML = "Your Entered number is Odd: " + number
                }
            }
            else
            {
                    document.getElementById("output").innerHTML = "Your Entered number is Zero: " + number;
            }                       
    }
}


function clearAll() {
    if (confirm("Are you sure, want to clear?")) {
        location.reload();
    }
}

function start() {
    document.getElementById("nextbtn").disabled = false;
    document.getElementById("nextbtn").style.backgroundColor = "green";
    document.getElementById("clearbtn").disabled = false;
    document.getElementById("clearbtn").style.backgroundColor = "green";
    document.getElementById("startbtn").disabled = true;
    document.getElementById("startbtn").style.backgroundColor = "red";
}

var i = 0;
var arr = ["#step1", "#step2", "#step3", "#step4", "#step5", "#step6", "#step7", "#step8", "#step9", "#step10", "#step11", "#step12","#step13","#step14","#step15","#step16","#step17","#step18","#step19","#step20","#step21", "#step22"];

function next() {
    if (i == $(arr.length - 1)) {
        i = 0;
    } else {
        if (i < arr.length) {
            $(arr[i]).css("color", "red");
            $(arr[i - 1]).css("color", "black");
            ++i;
            if (arr[i] == "#step6") {
                document.getElementById("make_visible").style.display = "block";

            }
            if (arr[i] == "#step7") {
                if (document.getElementById("getdata").value.trim() == "") {
                    alert("please enter the data first to proceed");
                    location.reload();
                }
            }


        }
    }
}