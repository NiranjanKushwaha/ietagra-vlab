function Prime() {
    var a = document.getElementById("getdata").value;
    if (a.trim() == "") {
        document.getElementById("getdata").style.border = "2px solid red";
    } else {
        document.getElementById("getdata").style.border = "2px solid green";
        var i, flag = 0,
            number;
        number = Number(document.getElementById("getdata").value);
        if (number > 1) {
            for (i = 2; i <= number / 2; i++) {
                if (number % i == 0) {
                    flag = 1;
                    break;
                }
            }
        }
        if (flag == 0) {
            if (number == 0 || number == 1|| number<0) {
                alert("Please Enter a number greater than 1");
                document.getElementById("output").innerHTML = "Your Entered number is not Prime: " + number;
            } else {
                document.getElementById("output").innerHTML = "Your Entered number is Prime: " + number;
            }

        } else {
            document.getElementById("output").innerHTML = "Your Entered number is Not Prime: " + number;
        }
    }
}


function clearAll() {
    if (confirm("Are you sure, want to clear?")) {
        location.reload();
    }
}

// function start() {
//     document.getElementById("nextbtn").disabled = false;
//     document.getElementById("nextbtn").style.backgroundColor = "green";
//     document.getElementById("clearbtn").disabled = false;
//     document.getElementById("clearbtn").style.backgroundColor = "green";
//     document.getElementById("startbtn").disabled = true;
//     document.getElementById("startbtn").style.backgroundColor = "red";
// }

var i = 0;
var arr = ["#step1", "#step2", "#step3", "#step4", "#step5", "#step6", "#step7", "#step8", "#step9", "#step10", "#step11", "#step12", "#step13", "#step14", "#step15", "#step16", "#step17", "#step18", "#step19", "#step20", "#step21", "#step22", "#step23", "#step24", "#step25", "#step26", "#step27"];

function next() {
    if (i == $(arr.length - 1)) {
        i = 0;
    } else {
        if (i < arr.length) {
            $("#nextbtn").html("Next");
            document.getElementById("clearbtn").disabled = false;
            // document.getElementById("clearbtn").style.backgroundColor = "green";
            $(arr[i]).css("color", "red");
            $(arr[i - 1]).css("color", "black");
            ++i;
            if (arr[i] == "#step7") {
                document.getElementById("make_visible").style.display = "block";
                $("#getdata").focus();

            }
            if (arr[i] == "#step8") {
                // if (document.getElementById("getdata").value.trim() == "") {
                //     alert("please enter the data first to proceed");
                //     location.reload();
                // }
                if (document.getElementById("getdata").value.trim() == "")
                {
                    alert("please enter the  number to proceed");
                    document.getElementById("getdata").value = parseInt(prompt("Enter the Number Here"), 10);
                    if (document.getElementById("getdata").value.trim() == "" || document.getElementById("getdata").value=="NaN") 
                    {
                        alert("You have crossed the limits!!!");
                        location.reload();
                    }
                    else {
                        Prime();
                    }
                }
                else
                {
                        Prime();
                }
            }


        }
    }
}