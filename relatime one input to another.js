https://jsfiddle.net/m9cudt3k/

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
