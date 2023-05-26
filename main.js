//2 commands 1 button
function clickEvent(){
    num();
    text();
}
//maths of the vending
  function num(){
document.getElementById("costs").innerText=document.getElementById("costs").innerText*1+event.target.innerText*1;
  }
  //activate the collect button by seeing if all tiems are paid or else stay disabled