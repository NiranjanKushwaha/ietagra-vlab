function traverse(){
    var text;
    var x = document.getElementById("one").value;
    var y = document.getElementById("two").value;

    if (isNaN(x) || x < 1 || isNaN(y)|| y < 1) {
        text = "<b>Input provided is not valid! please enter positive integer values!</b>";
        document.getElementById("hidden").innerHTML = text;
        
    } 
    else{
        localStorage.setItem("numDice",x);
        localStorage.setItem("numFaces",y);
        window.document.location.href='./roll.html';
    }
   
}

document.getElementById("pref").addEventListener("click", traverse);

