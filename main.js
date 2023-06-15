//2 commands 1 button
function clickEvent(){
    num();
    text();
}
//maths of the vending
  function num(){
document.getElementById("costs").innerText=document.getElementById("costs").innerText*1+event.target.innerText*1;
  }
//jquery count

 $(document).ready(function () {
        $('#btnadd').on('click', function () {
            var n1 = parseInt($('#txtn1').val());
            var n2 = parseInt($('#txtn2').val());
			var n3 = parseInt($('#txtn3').val());
			var n4 = parseInt($('#txtn4').val());
            var r = n1 + n2 + n3 + n4;
            return false;
        });
        $('#btnclear').on('click', function () {
            $('#txtn1').val('1');
            $('#txtn2').val('2');
			$('#txtn3').val('3');
			$('#txtn4').val('4');
            $('#txtn1').focus();
            return false;
        });
    });