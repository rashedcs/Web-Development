https://jsfiddle.net/m9cudt3k/
http://javascript-coder.com/javascript-form/javascript-calculator-script.phtml
https://jsfiddle.net/flamedenise/fpovk96p/

<form>
<label>first name:</label><input id="firstName1"/>
<label>last name:</label><input id="lastName1"/>
</form>
<br/>
<form>
<label>first name:</label><input id="firstName2"/>
<label>last name:</label><input id="lastName2"/>
</form>

$("#firstName1").change(function (){
$("#firstName2").val($(this).val());
});

$("#lastName1").keyup(function(){
$("#lastName2").val($(this).val())
});


2nd:

 <input id='first' type="text" class="form-control formBlock" name="bus_ticket"  placeholder="Bus Ticket..." required/><br />

<input id='second' type="text" class="form-control formBlock" name="plane_ticket"  placeholder="Plane Ticket..." required/><br />

<input id='third' type="text" class="form-control formBlock" name="hotel_expenses"  placeholder="Hotel Expenses..." required/><br />

 <input id='fourth' type="text" class="form-control formBlock" name="eating_expenses"  placeholder="Eating Expenses..." required/><br />
<br /><br />
Total: <span id="total_expenses1"></span>
<br />
Total: <input id='total_expenses2' type="text" class="form-control formBlock" name="funding"  placeholder="Total Expenses..."/>

<br /><br />
For:
<a target="_blank" href="http://stackoverflow.com/questions/42730666/real-time-javascript-calculation-based-on-form-inputs">a stackoverflow question</a>

$('input').keyup(function(){ // run anytime the value changes
    var firstValue  = Number($('#first').val());   // get value of field
    var secondValue = Number($('#second').val()); // convert it to a float
    var thirdValue  = Number($('#third').val());
    var fourthValue = Number($('#fourth').val());

    $('#total_expenses1').html(firstValue + secondValue + thirdValue + fourthValue); // add them and output it
    document.getElementById('total_expenses2').value = firstValue + secondValue + thirdValue + fourthValue;
// add them and output it
});

/*
$('input').keyup(function(){ // run anytime the value changes
    var firstValue = parseFloat($('#first').val()); // get value of field
    var secondValue = parseFloat($('#second').val()); // convert it to a float
    var thirdValue = parseFloat($('#third').val());
    var fourthValue = parseFloat($('#fourth').val());
    document.getElementById('#total_expenses').value(firstValue + secondValue + thirdValue + fourthValue);
// add them and output it
});*/
