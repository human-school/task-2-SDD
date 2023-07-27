//the text for the first snak option
function showDiv1() {
   document.getElementById('content_caract_1').style.display = "block";
      document.getElementById('btnShow1').disabled = true;
   document.getElementById('btnHide1').disabled = false;
}
//the text for the second snak option
function showDiv2() {
   document.getElementById('content_caract_2').style.display = "block";
      document.getElementById('btnShow2').disabled = true;
   document.getElementById('btnHide2').disabled = false;
}
//the text for the thrid snak option
function showDiv3() {
   document.getElementById('content_caract_3').style.display = "block";
      document.getElementById('btnShow3').disabled = true;
   document.getElementById('btnHide3').disabled = false;
}
//the text for the forth snak option
function showDiv4() {
   document.getElementById('content_caract_4').style.display = "block";
   document.getElementById('btnShow4').disabled = true;
   document.getElementById('btnHide4').disabled = false;
}
//the code that unlocks the select the firsts snak options
function hideDiv1() {
   document.getElementById('content_caract_1').style.display = "none";
   document.getElementById('btnShow1').disabled = false;
   document.getElementById('btnHide1').disabled = true;
}
//the code that unlocks the select te second snak options
function hideDiv2() {
   document.getElementById('content_caract_2').style.display = "none";
   document.getElementById('btnShow2').disabled = false;
   document.getElementById('btnHide2').disabled = true;
}
//the code that unlocks the select the thrid snak options
function hideDiv3() {
   document.getElementById('content_caract_3').style.display = "none";
   document.getElementById('btnShow3').disabled = false;
   document.getElementById('btnHide3').disabled = true;
}
//the code that unlocks the select the forth snak options
function hideDiv4() {
   document.getElementById('content_caract_4').style.display = "none";
   document.getElementById('btnShow4').disabled = false;
   document.getElementById('btnHide4').disabled = true;
}
//refreshes the seleted snak option without refreshing the page
function hide() {
   document.getElementById('content_caract_1').style.display = "none";
   document.getElementById('content_caract_2').style.display = "none";
   document.getElementById('content_caract_3').style.display = "none";
   document.getElementById('content_caract_4').style.display = "none";
   document.getElementById('btnShow').disabled = false;
   document.getElementById('btnHide').disabled = true;
}
function hide1() {
  hideDiv1();
  hide();
}
function hide2() {
  hideDiv2();
  hide();
}
function hide3() {
  hideDiv3();
  hide();
}
function hide4() {
  hideDiv4();
  hide();
}
function show1() {
  showDiv1();
}
function show2() {
  showDiv2();
}
function show3() {
  showDiv3();
}
function show4() {
  showDiv4();
}
function money1() {
  const input = document.getElementById("total");
  input.value = Number(input.value) + 1;
}
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