var x = localStorage.getItem("numDice");
var y = localStorage.getItem("numFaces");
var arr;
var arrString="";

function roll(){
    arr=[];
    arrString="";


    for(var i=0;i<x;i++){
        var t=Math.floor(Math.random() * y)+1;
        arr.push(t);
    }
    document.getElementById("hid1").innerHTML="Your have rolled the following values "+arr;
    arr.sort();

    var firstNum = arr[0];
    var ctr = 0;
    for(var j =0;j<arr.length;j++){
        if(arr[j]==firstNum){
            ctr+=1;
        }
        else{
            arrString +="You have rolled the value <b>"+ firstNum + "</b> a total of <b>" +ctr + "</b> times! <br>";
            firstNum=arr[j];
            ctr=1;
        }
    }
    arrString +="You have rolled the value <b>"+ firstNum + "</b> a total of <b>" +ctr + "</b> times! <br>";

    
    document.getElementById("hid2").innerHTML= arrString;
}

document.getElementById("start").addEventListener("click", roll);
