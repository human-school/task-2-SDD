
function showDiv1() {
   document.getElementById('content_caract_1').style.display = "block";
      document.getElementById('btnShow1').disabled = true;
   document.getElementById('btnHide1').disabled = false;
}
function showDiv2() {
   document.getElementById('content_caract_2').style.display = "block";
      document.getElementById('btnShow2').disabled = true;
   document.getElementById('btnHide2').disabled = false;
}
function showDiv3() {
   document.getElementById('content_caract_3').style.display = "block";
      document.getElementById('btnShow3').disabled = true;
   document.getElementById('btnHide3').disabled = false;
}
function showDiv4() {
   document.getElementById('content_caract_4').style.display = "block";
   document.getElementById('btnShow4').disabled = true;
   document.getElementById('btnHide4').disabled = false;
}
function hideDiv1() {
   document.getElementById('content_caract_1').style.display = "none";
   document.getElementById('btnShow1').disabled = false;
   document.getElementById('btnHide1').disabled = true;
}
function hideDiv2() {
   document.getElementById('content_caract_2').style.display = "none";
   document.getElementById('btnShow2').disabled = false;
   document.getElementById('btnHide2').disabled = true;
}
function hideDiv3() {
   document.getElementById('content_caract_3').style.display = "none";
   document.getElementById('btnShow3').disabled = false;
   document.getElementById('btnHide3').disabled = true;
}
function hideDiv4() {
   document.getElementById('content_caract_4').style.display = "none";
   document.getElementById('btnShow4').disabled = false;
   document.getElementById('btnHide4').disabled = true;
}
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
  hideDiv1();
  hide();
}
function hide3() {
  hideDiv1();
  hide();
}
function hide4() {
  hideDiv1();
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