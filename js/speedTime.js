function Speed() {
  var dis1 = Number(document.getElementById("dis1").value);
  var tim1 = Number(document.getElementById("tim1").value);
  var c = dis1 / tim1;
  document.getElementById("output").innerHTML =
    "Your speed must be  " + c + " km/h";
}

function Time() {
  var dis2 = Number(document.getElementById("dis2").value);
  var spe1 = Number(document.getElementById("spe1").value);
  var c = dis2 / spe1;
  document.getElementById("output").innerHTML =
    "You take a time for " + c + " hours.";
}

function Distance() {
  var spe2 = Number(document.getElementById("spe2").value);
  var tim2 = Number(document.getElementById("tim2").value);
  var c = spe2 * tim2;
  document.getElementById("output").innerHTML =
    "You cover a distance  " + c + " km";
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
var arr = [
  "#step1",
  "#step2",
  "#step3",
  "#step4",
  "#step5",
  "#step6",
  "#step7",
  "#step8",
  "#step9",
  "#step10",
  "#step11",
  "#step12",
  "#step13",
  "#step14",
  "#step15",
  "#step16",
  "#step17",
];

function next() {
  if (i == $(arr.length - 1)) {
    i = 0;
  } else {
    if (i < arr.length) {
      $(arr[i]).css("color", "red");
      $(arr[i - 1]).css("color", "black");
      ++i;

      if (arr[i] == "#step9") {
        var person = prompt(
          "Please enter a number which function execute",
          "1"
        );
        if (person == 1) {
          i = i + 0;
          document.getElementById("make_visible1").style.display = "block";
        }
        if (person == 2) {
          i = i + 3;
          document.getElementById("make_visible2").style.display = "block";
        }
        if (person == 3) {
          i = i + 6;
          document.getElementById("make_visible3").style.display = "block";
        }
      }
      if (arr[i] == "#step11") {
        if (
          document.getElementById("dis1").value.trim() == "" &&
          document.getElementById("tim1").value.trim() == ""
        ) {
          alert("please enter the data first to proceed");
          location.reload();
        }
      }

      if (arr[i] == "#step14") {
        if (
          document.getElementById("dis2").value.trim() == "" &&
          document.getElementById("spe1").value.trim() == ""
        ) {
          alert("please enter the data first to proceed");
          location.reload();
        }
      }

      if (arr[i] == "#step17") {
        if (
          document.getElementById("spe2").value.trim() == "" &&
          document.getElementById("tim2").value.trim() == ""
        ) {
          alert("please enter the data first to proceed");
          location.reload();
        }
      }
    }
  }
}
