
    
    
  var arr = ['#p1','#p2','#p3','#p4','#p5','#p6','#p7','#p8','#p9','#p10','#p11','#p12'];
    var i=0;  

function nextStep()
{





	var element1 = document.querySelector('#p1');
	var element2 = document.querySelector('#p2');
	let element3 = document.querySelector('#p3');
    let element4 = document.querySelector('#p4');
    let element5 = document.querySelector('#p5');
    let element6 = document.querySelector('#p6');
    let element7 = document.querySelector('#p7');
    let element8 = document.querySelector('#p8');
    let element9 = document.querySelector('#p9');
    let element10 = document.querySelector('#p10');
    let element11= document.querySelector('#p11');
    let element12 = document.querySelector('#p12');
    var val1 = document.querySelector('#inp');
    var input1 = document.querySelector('#num');
    // let ele1 = document.querySelector('#ele1');
    // let ele2 = document.querySelector('#ele2');
    // let ele3 = document.querySelector('#ele3');
    // let ele4 = document.querySelector('#ele4');


    if (i == (arr.length )) {
        i = 0;
        
    } else {
        if (i < arr.length) {
        
             if(arr[i] == '#p1')
             {
                input1.style.display = 'none';
                val1.style.display = 'none';
               element12.style.color = 'black';
               element12.style.fontSize = '15px';
                element1.style.color = 'red';
                element1.style.fontSize = '20px';
               
                document.querySelector('#e1').innerHTML = 'Loading Standerd Input Output Header File';
                document.querySelector('#e12').style.display = 'none';
               
             }
             else if(arr[i] == '#p2')
             {
                input1.style.display = 'none';
                val1.style.display = 'none';
                element2.style.color = 'red';
                element2.style.fontSize = '20px';
                element1.style.color = 'black';
                element1.style.fontSize = '15px';
                document.querySelector('#e2').innerHTML = 'This Is Main Function'
                document.querySelector('#e1').style.display = 'none';
               
             }
             else if(arr[i] == '#p3')
             {
                input1.style.display = 'none';
                val1.style.display = 'none';
                element3.style.color = 'red';
                element3.style.fontSize = '20px';
                element2.style.color = 'black';
                element2.style.fontSize = '15px';
                document.querySelector('#e3').innerHTML = 'Opening Bracket of Main function';
                document.querySelector('#e2').style.display = 'none';
            }


            else if(arr[i] == '#p4')
             {
                input1.style.display = 'none';
                val1.style.display = 'none';
                element4.style.color = 'red';
                element4.style.fontSize = '20px';
                element3.style.color = 'black';
                element3.style.fontSize = '15px';
                document.querySelector('#e4').innerHTML = 'declarion of n,i and initialization of fact';
                document.querySelector('#e3').style.display = 'none';

            }
            else if(arr[i] == '#p5')
             {
                element5.style.color = 'red';
                element5.style.fontSize = '20px';
                element4.style.color = 'black';
                element4.style.fontSize = '15px';
                val1.style.display = 'none';
                
                input1.style.display = "block";
                document.querySelector('#e5').innerHTML = 'Enter a number';
                document.querySelector('#e4').style.display = 'none';
            }
            else if(arr[i] == '#p6')
             {
                element6.style.color = 'red';
                element6.style.fontSize = '20px';
                element5.style.color = 'black';
                element5.style.fontSize = '15px';
                
                val1.style.display = 'block';
                document.querySelector('#e6').innerHTML = 'It takes Input from the User';
                document.querySelector('#e5').style.display = 'none';
            
            }
            else if(arr[i] == '#p7')
             {
                element7.style.color = 'red';
                element7.style.fontSize = '20px';
                element6.style.color = 'black';
                element6.style.fontSize = '15px';
                document.querySelector('#e7').innerHTML = 'for loop statement';
                document.querySelector('#e6').style.display = 'none';
            }
            else if(arr[i] == '#p8')
             {
                element8.style.color = 'red';
                element8.style.fontSize = '20px';
                element7.style.color = 'black';
                element7.style.fontSize = '15px';
                document.querySelector('#e8').innerHTML = 'opening bracket of for loop';
                document.querySelector('#e7').style.display = 'none';
            }
            else if(arr[i] == '#p9')
             {
                element9.style.color = 'red';
                element9.style.fontSize = '20px';
                element8.style.color = 'black';
                element8.style.fontSize = '15px';
                document.querySelector('#e9').innerHTML = 'calculation of  factorial ';
                document.querySelector('#e8').style.display = 'none';
            }
            else if(arr[i] == '#p10')
             {
                element10.style.color = 'red';
                element10.style.fontSize = '20px';
                element9.style.color = 'black';
                element9.style.fontSize = '15px';
                document.querySelector('#e10').innerHTML = 'closing bracket of for loop';
                document.querySelector('#e9').style.display = 'none';
            }
            else if(arr[i] == '#p11')
             {
                element11.style.color = 'red';
                element11.style.fontSize = '20px';
                element10.style.color = 'black';
                element10.style.fontSize = '15px';
                document.querySelector('#e11').innerHTML = 'Final result of Fcatorial Calculation';
                document.querySelector('#e10').style.display = 'none';
                var ele = document.getElementById('fact');
                ele.style.display = 'block';

            }
            
            else if(arr[i] == '#p12')
             {
                
                element12.style.color = 'red';
                element12.style.fontSize = '20px';
                element11.style.color = 'black';
                element11.style.fontSize = '15px';
                document.querySelector('#e12').innerHTML = 'Closing bracket of main Function';
                document.querySelector('#e11').style.display = 'none';
            }
           
           
            ++i;
        }
    }



 }

 function loadProgram()
 {
    
   var element = document.getElementById('next');
   element.disabled = false;
 
 }

  function fact()
  {
    number = document.getElementById('inp').values;
    console.log(number);
    var fact = 1;
    var i;
    if(i==0)
    {
        alert("Zero Not allowed Please Enter a valid number !");
    }
    else
    {
        for(i=n; i<=1;i--)
        {
            fact = fact * i;
        }
        document.write(fact);
    }
  }
