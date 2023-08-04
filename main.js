//item 1-4 select and subtract muli activate
function item1() {
  itemsub1();
  itemmain1();
}
function item2() {
  itemsub2();
  itemmain2();
}
function item3() {
  itemsub3();
  itemmain3();
}
function item4() {
  itemsub4();
  itemmain4();
}
//restock all items at the same time
function restock() {
  re1();
  re2();
  re3();
  re4();
  check();
}
//item 1-4 money, stock and select
function hide1() {
  check();
  hideDiv1();
  hide();
}
function hide2() {
  hideDiv2();
  hide();
  check();
}
function hide3() {
  hideDiv3();
  hide();
  check();
}
function hide4() {
  hideDiv4();
  hide();
  check();
}
//hide any active selections(for firefox) and check if money and stock is good
function start(){
  hide();
  check();
}
//the grand checker activator
function check() {
  scheck1();
  scheck2();
  scheck3();
  scheck4();
  salert1();
  salert2();
  salert3();
  salert4();
  check1();
  check2();
  check3();
  check4();
}
//the item 1-4 themselfs muli selelector
function show1() {
  showDiv1();
  item1();
  check();
}
function show2() {
  showDiv2();
  item2();
  check();
}
function show3() {
  showDiv3();
  item3();
  check();
}
function show4() {
  showDiv4();
  item4();
  check();
}
//change display and subtract from total
function change() {
  var count = document.getElementById('total').value; //make total into a var
  alert(count + " dollars is your change today "); //alert using the count var
  const input = document.getElementById("total"); //total const input so the next line has something to subtract from
  input.value = Number(input.value) - count;
  check(); //with no money comes no items
}
//stock check for item 1-4
function scheck1(){
var count = document.getElementById('amount1').value; //make the id for item one stock into a var
if (count > 1) { //stock level check
   document.getElementById('btnHide1').disabled = false; //re enable the button is stock is good
} else {
   document.getElementById('btnHide1').disabled = true; //disable the dispence button is stock is to low
}
} //scheck1's comments are the same for 1-4
function scheck2(){
var count = document.getElementById('amount2').value;
if (count > 1) {
   document.getElementById('btnHide2').disabled = false;
} else {
   document.getElementById('btnHide2').disabled = true;
}
}
function scheck3(){
var count = document.getElementById('amount3').value;
if (count > 1) {
   document.getElementById('btnHide3').disabled = false;
} else {
   document.getElementById('btnHide3').disabled = true;
}
}
function scheck4(){
var count = document.getElementById('amount4').value;
if (count > 1) {
   document.getElementById('btnHide4').disabled = false;
} else {
   document.getElementById('btnHide4').disabled = true;
}
}
//money check for item 1-4
function check1(){
var count = document.getElementById('total').value;
if (count > 2) {
   document.getElementById('btnHide1').disabled = false;
} else {
   document.getElementById('btnHide1').disabled = true;
}
}
function check2(){ //its the same as scheck 1-4 just insted of the amount id is uses the total id
var total
var count = document.getElementById('total').value;
if (count > 3) {
   document.getElementById('btnHide2').disabled = false;
} else {
   document.getElementById('btnHide2').disabled = true;
}
}
function check3(){
var total
var count = document.getElementById('total').value;
if (count > 2) {
   document.getElementById('btnHide3').disabled = false;
} else {
   document.getElementById('btnHide3').disabled = true;
}
}
function check4(){
var total
var count = document.getElementById('total').value;
if (count > 5) {
   document.getElementById('btnHide4').disabled = false;
} else {
   document.getElementById('btnHide4').disabled = true;
}
}
function salert1(){ //alert the user when the item they want is empty
var count = document.getElementById('amount1').value; //make the id for item one stock into a var
if (count > 1) { //stock check
  console.log("instock"); //a log for instock
}
  else {
   alert("Item selected is out of stock"); //alert the user of no stock
  }
} //same for 2-4 just with the number after amout going up by 1
function salert2(){
var count = document.getElementById('amount2').value;
if (count > 1) {
  console.log("instock");
}
  else {
   alert("Item selected is out of stock");
  }
}
function salert3(){
var count = document.getElementById('amount3').value;
if (count > 1) {
  console.log("instock");
}
  else {
   alert("Item selected is out of stock");
  }
}
function salert4(){
var count = document.getElementById('amount4').value;
if (count > 1) {
  console.log("instock");
}
  else {
   alert("Item selected is out of stock");
  }
}
//the text for the first snak option
function showDiv1() {
   document.getElementById('content_caract_1').style.display = "block"; // display the style
      document.getElementById('btnShow1').disabled = true; //disable its own button
} //1-4 all the same just add 1 to the function
//the text for the second snak option
function showDiv2() {
   document.getElementById('content_caract_2').style.display = "block";
      document.getElementById('btnShow2').disabled = true;
}
//the text for the thrid snak option
function showDiv3() {
   document.getElementById('content_caract_3').style.display = "block";
      document.getElementById('btnShow3').disabled = true;
}
//the text for the forth snak option
function showDiv4() {
   document.getElementById('content_caract_4').style.display = "block";
   document.getElementById('btnShow4').disabled = true;
}
//the code that unlocks the select the firsts snak options
function hideDiv1() {
   document.getElementById('content_caract_1').style.display = "none"; //hide the style therefore the snack output
   document.getElementById('btnShow1').disabled = false; //unlock the display output button
} //1-4 all the same just add 1 to the function
//the code that unlocks the select te second snak options
function hideDiv2() {
   document.getElementById('content_caract_2').style.display = "none";
   document.getElementById('btnShow2').disabled = false;
}
//the code that unlocks the select the thrid snak options
function hideDiv3() {
   document.getElementById('content_caract_3').style.display = "none";
   document.getElementById('btnShow3').disabled = false;
}
//the code that unlocks the select the forth snak options
function hideDiv4() {
   document.getElementById('content_caract_4').style.display = "none";
   document.getElementById('btnShow4').disabled = false;
}
//refreshes the seleted snak option without refreshing the page
function hide() {
   document.getElementById('content_caract_1').style.display = "none";
   document.getElementById('content_caract_2').style.display = "none";
   document.getElementById('content_caract_3').style.display = "none";
   document.getElementById('content_caract_4').style.display = "none";
}
function money1() { //insert money 1, 2, 5 ,10 at a time
  const input = document.getElementById("total"); //make total id into a const so it can be added to
  input.value = Number(input.value) + 1; //add one to it
} //repeat for 1-4
function money2() {
  const input = document.getElementById("total");
  input.value = Number(input.value) + 2;
}
function money5() {
  const input = document.getElementById("total");
  input.value = Number(input.value) + 5;
}
function money10() {
  const input = document.getElementById("total");
  input.value = Number(input.value) + 10;
}
function itemsub1() { //stock remove for item 1-4
  const input = document.getElementById("amount1"); //make amount1 into a var
  input.value = Number(input.value) - 1; //remove one from it
}
function itemsub2() {
  const input = document.getElementById("amount2");//make amount2 into a var
  input.value = Number(input.value) - 1;//remove one from it
}
function itemsub3() {
  const input = document.getElementById("amount3");//make amount3 into a var
  input.value = Number(input.value) - 1;//remove one from it
}
function itemsub4() {
  const input = document.getElementById("amount4");//make amount4 into a var
  input.value = Number(input.value) - 1;//remove one from it
}// its a lot simplier to just say - repeat for 1-4 just add one to the function
function itemmain1() { //the cost of goods
  const input = document.getElementById("total"); //make total into a var
  input.value = Number(input.value) - 2; //remove 2 from the total
}// its the same for 1-4 just a diffrent number in the function and a diffrent cost to be subtacted
function itemmain2() {
  const input = document.getElementById("total");
  input.value = Number(input.value) - 3;
}
function itemmain3() {
  const input = document.getElementById("total");
  input.value = Number(input.value) - 1;
}
function itemmain4() {
  const input = document.getElementById("total");
  input.value = Number(input.value) - 5;
}
function re1() { //restock item 1-4
  const input = document.getElementById("amount1");//make amount1 into a var
  input.value = Number(input.value) + 10; //add 10 to it
}
function re2() {
  const input = document.getElementById("amount2");//make amount2 into a var
  input.value = Number(input.value) + 10;//add 10 to it
}
function re3() {
  const input = document.getElementById("amount3");//make amount3 into a var
  input.value = Number(input.value) + 10;//add 10 to it
}
function re4() {
  const input = document.getElementById("amount4");//make amount4 into a var
  input.value = Number(input.value) + 10;//add 10 to it
}

