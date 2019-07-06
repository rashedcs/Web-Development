https://jsfiddle.net/m9cudt3k/
http://javascript-coder.com/javascript-form/javascript-calculator-script.phtml
https://jsfiddle.net/flamedenise/fpovk96p/
http://javalearning-adventure.blogspot.com/2010/08/javascript-real-time-calculation.html
http://ideone.com/BNpJrz





<!-- Reference : https://www.youtube.com/watch?v=vkBiEuZSq9s  -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script>
function summation()
{
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var input3 = document.getElementById('input3').value;
    var total = (input1*1) + (input2*1) +(input3*1);
    document.getElementById('total').innerHTML = "Total = $"+total;
}
</script> 
</head>
<body>
<p>Input 1 : <input id="input1" type="number"  onchange="summation()"></p>
<p>Input 2 : <input id="input2" type="number"  onchange="summation()"></p>
<p>Input 3 : <input id="input3" type="number"  onchange="summation()"></p>
<p id="total"></p>
</body>
</html>
