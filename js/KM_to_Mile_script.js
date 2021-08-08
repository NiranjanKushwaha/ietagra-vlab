function Kilo() {
    var a = Number(document.getElementById("getdata").value);
    var mil=a*0.6213;
    document.getElementById("output").innerHTML = "Your Distance  is : " + mil.toFixed(3)+" miles";
} 

function Mile() {
    var a = Number(document.getElementById("getdata1").value);
    var km=a*1.6093;
    document.getElementById("output").innerHTML = "Your Distance is : " + km.toFixed(3) +" Km";
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
var arr = ["#step1", "#step2", "#step3", "#step4", "#step5", "#step6", "#step7", "#step8", "#step9", "#step10", "#step11", "#step12", "#step13", "#step14", "#step15", "#step16", "#step17", "#step18", "#step19", "#step20","#step21"];

function next() {
    if (i == $(arr.length - 1)) {
        i = 0;
    } else {
        if (i < arr.length) {
            $(arr[i]).css("color", "blue");
            $(arr[i - 1]).css("color", "black");
            ++i;
            if (arr[i] == "#step9") {
                var cas=prompt("Enter a case number ","1");
                if(cas==1){
                    i=i+0;

                }
                if(cas==2){
                    i=i+5;
                }

            }
            if(arr[i] == "#step13"){
                document.getElementById("make_visible").style="display:block;";
            }
           
            if(arr[i] == "#step18"){
                document.getElementById("make_visible1").style="display:block;";
            }

            if (arr[i] == "#step19") {
                if (document.getElementById("getdata1").value.trim() == "") {
                    alert("please enter the data first to proceed");
                    location.reload();
                }
            }


        }
    }
}