var a; 
var check;

function datasubmit1() {
     a = document.getElementById("firstNum").value;
     console.log(a);

      check = palindrome(a);
  if (a.trim() == "") {  
    document.getElementById("firstNum").style.border = "2px solid red";
    document.getElementById("lbl1").style.display = "block";
  } else {
    document.getElementById("given_val1").innerHTML = a;
    document.getElementById("firstNum").style.border = "2px solid green";
    document.getElementById("lbl1").style.display = "none";
  }
}

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function datasubmit2() {
  var reverseNum = reverseString(a);
  console.log(reverseNum);
  var b = reverseNum;
  if (b.trim() == "") {
    document.getElementById("secondNum").style.border = "2px solid red";
    document.getElementById("lbl2").style.display = "block";
  } else {
    document.getElementById("given_val2").innerHTML = b;
    document.getElementById("secondNum").style.border = "2px solid green";
    document.getElementById("lbl2").style.display = "none";
  }
}

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

function palindrome(st) {
  
    if(st == reverseString(st))
      return true;
    else 
    return false;  
}



var i = 0;
var arr = [
  "#line1",
  "#line2",
  "#line3",
  "#line4",
  "#line5",
  "#line6",
  "#line7",
  "#line8",
  "#line9",
  "#line10",
  "#line11",
  "#line12",
  "#line13",
  "#line14",
  "#line15",
  "#line16",
  "#line17",
];

function showNext() {
  if (i == $(arr.length - 1)) {
    i = 0;
  } else {
    if (i < arr.length) {
      $(arr[i]).css("color", "red");
      $(arr[i - 1]).css("color", "dodgerblue");
      ++i;

      if (arr[i] == "#line5") {
        $("#firstNum").css("display", "block");
      }

      if (arr[i] == "#line6") {
        if (document.getElementById("firstNum").value.trim() == "") {
          alert("please enter the first data to proceed");
          location.reload();
        }
      }
      if (arr[i] == "#line7") {
        $(".value1-box").css("display", "block");
        datasubmit1();
      }

      if (arr[i] == "#line8") {
        $(".tempbox").css("display", "block");
      }

      if (arr[i] == "#line11") {
        $(".value2-box").css("display", "block");
        datasubmit2();
      }

      if (arr[i] == "#line13") {
        if (check==1) {
          $(".yes_answer").css("display", "block");
        }
      }

      if (arr[i] == "#line15") {
        if (check==0) {
          $(".no_answer").css("display", "block");
        }
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
