var firstValue, secondValue;
var firstNum=document.querySelector("#firstNum");
var secondNum=document.querySelector("#secondNum");
firstNum.addEventListener("change",function(event){
firstValue= event.target.value;
})
secondNum.addEventListener("change",function(event){
secondValue= event.target.value;
})

function datasubmit1() {
    var a = document.getElementById("firstNum").value;
    if (a.trim() == "") {
        document.getElementById("firstNum").style.border = "2px solid red";
        document.getElementById("lbl1").style.display = "block";
    } else {
        document.getElementById("given_val1").innerHTML = a;
        document.getElementById("firstNum").style.border = "2px solid green";
        document.getElementById("lbl1").style.display = "none";
    }
}

function datasubmit2() {
    var b = document.getElementById("secondNum").value;
    if (b.trim() == "") {
        document.getElementById("secondNum").style.border = "2px solid red";
        document.getElementById("lbl2").style.display = "block";
    } else {
        document.getElementById("given_val2").innerHTML = b;
        document.getElementById("secondNum").style.border = "2px solid green";
        document.getElementById("lbl2").style.display = "none";
    }
}

var i = 0;
var arr = ["#line1", "#line2", "#line3", "#line4", "#line5", "#line6", "#line7", "#line8", "#line9", "#line10", "#line11", "#line12", "#line13", "#line14", "#line15", "#line16", "#line17"];
function next(){
    if (i == (arr.length)) {
        i = 0;
    }else{
        if(i<= arr.length){
            document.querySelector(`${arr[i]}`).style.color="red";
            i++;
            if(arr[i]=="#line6"){
                document.querySelector("#firstNum").style.display="block";
                
            }        
            if(arr[i]=="#line8"){
                document.querySelector("#secondNum").style.display="block";
                document.querySelector("#Enterbtn").style.display="block";
                
            }    
            
            if(arr[i]== "#line11"){
                [firstValue, secondValue]=[secondValue,firstValue];
            }  
            if(arr[i]=="#line9"){
                document.querySelector(".value1-box").style.display="block";
                datasubmit1();
                
            }
            if(arr[i]=="#line10"){
                document.querySelector(".value2-box").style.display="block";
                datasubmit2();
            }
            
            if (arr[i] == "#line15") {
                $(".swap-box1").css("background-color", "#009432")
                var a = $("#secondNum").val();
                $("#swapped-data1").html(firstValue);
                $(".swap-box1").css("display", "block");
            }
            if (arr[i] == "#line16") {
                $(".swap-box2").css("background-color", "#009432")
                var a = $("#firstNum").val();
                $("#swapped-data2").html(secondValue);
                $(".swap-box2").css("display", "block");
            }
            
        }
    }
    
    
}


function start() {
    document.getElementById("nextbtn").disabled = false;
    document.getElementById("clearbtn").disabled = false;
    document.getElementById("startbtn").disabled = true;
}

function clearPage() {
    if (confirm("Are you sure, want to clear?")) {
        location.reload();
    }
}
