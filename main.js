//2 commands 1 button
function clickEvent(){
    sum();
    text();
}
//maths of the vending
  function sum(){
document.getElementById("sum").innerText=document.getElementById("sum").innerText*1+event.target.innerText*1;
  }
  //activate the collect button by seeing if all tiems are paid or else stay disabled
