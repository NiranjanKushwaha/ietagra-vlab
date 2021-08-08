
let contibutorHeader=document.getElementById("contibutor-top-heading");
let colorArr=["#7ed6df","#f0932b","#6ab04c","#30336b","#130f40","#f7b731","#3867d6","#d1d8e0","#eb3b5a"];

let i=0;
setInterval(()=>{
if(i==colorArr.length-1){
    i=0;
}
else{
    contibutorHeader.style.color=colorArr[i];
    i++;
}
},1000)