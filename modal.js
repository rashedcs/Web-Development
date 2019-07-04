https://www.youtube.com/watch?v=yIs_Y5adAYU


<%- include header %>
<html lang="en">

<head>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>  
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />  
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>  

     <!--
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>  
      <link rel="stylesheet" href="css/bootstrap.min.css">
     <script src="js/bootstrap.min.js"></script>
  -->
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>

<!-- (Optional) Latest compiled and minified JavaScript translation files -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/i18n/defaults-*.min.js"></script>

<!-----Date picker -->


<style>
.tab
{
   display:inline-block;height:1.5em;width:25em;
}
</style>
  </head>  


  <div class="container" style="width:700px;">  
    <h3 align="center">Doctor Appoinment System</h3>  
    <br />  
     <div class="table-responsive">
       <div align="left">
          <button type="button"  data-toggle="modal" data-target="#add_data_Modal" class="btn btn-danger">
	   Add Patient Info</button> 

          <span class='tab'>&nbsp;</span>

         <button type="button"  data-toggle="modal" data-target="#app_data_Modal" class="btn btn-danger">
	      Add Appointment Info</button>
    </div>
  <body> 

  <div id="add_data_Modal" class="modal fade">
   <div class="modal-dialog">
       <div class="modal-content">

	     <div class="modal-header">
	         <button type="button" class="close" data-dismiss="modal">&times;</button>
	          <label>Patient Information</label>
	     </div>

	     <div class="modal-body">
	       <form method="post" action="/home/patient"  id="insert_form">
		    	 <label>Mobile Number</label>
	             <input type="number" class="form-control" name="mobile" placeholder="Mobile Numner">

	             <br/>
			     <label>Patient Name</label>
	              <input type="text" class="form-control" name="full_name" placeholder="Name">

			     <br/>  
			     <label> Age</label>
	             <input type="number" class="form-control" name="age" placeholder="Age">

	             <br/>
			     <label> Sex </label>
			     <select name="sex" id="sex" class="form-control">
			        <option value="Male">Male</option>  
			        <option value="Female">Female</option>
			     </select>

	             <br/>
			      <label>Disease</label>
	              <input type="text" class="form-control" name="disease" placeholder="Disease">

	              <br/>
	              <input type="submit" name="insert" id="insert" value="Insert" class="btn btn-success" />

	              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

	         </form>
	      </div>
    </div>

  </div>
</div>


<!-- Appointment -->
  <div id="app_data_Modal" class="modal fade">
    <div class="modal-dialog">
       <div class="modal-content">

	     <div class="modal-header">
	         <button type="button" class="close" data-dismiss="modal">&times;</button>
	          <label>Patient Information</label>
	     </div>

	     <div class="modal-body">
	       <form method="post" action="/home/appointment"  id="submit_form">
		    	 <label>Serial Number</label>
	             <input type="text" class="form-control" name="serial" placeholder="Serial Number">

  				<br/>
		    	 <label>Mobile Number</label>
	             <input type="text" class="form-control" name="mobile" placeholder="Mobile Number">

	            <br/>
		    	<label>Test</label> <br/>
				<select name="test" placeholder="Test" class="selectpicker" multiple>
				  <option>Suger Test</option>
				  <option>Urine</option>
				  <option>Stress test</option>
				</select>
				<br/>

	             <br/>
	             <label>Test</label> <br/>
	             <input type="text" class="form-control" name="date" placeholder="Date">





		      <br/>
		      <input type="submit" name="insert" id="insert" value="Insert" class="btn btn-success" />

		      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

	         </form>
	      </div>
    </div>

  </div>
</div>
</html>




<script>  
$(document).ready(function()
{
	 $('#insert_form').on("submit", function(event)
	 {  
	        event.preventDefault();   

		    var data = {
			    mobile: "mobile",
			    full_name : "full_name",
			    age : "age",
			    sex : "sex",
			    disease : "disease"
		    }

		    $.ajax({  
			    url: $(this).attr("action"),
			    method:"post",  
			    beforeSend:function()
			    {  
			      $('#submit').val("Inserting");  
			    },  
			    success:function(data)
			    {  
			        $('#submit')[0].reset();  
			        $('#add_data_Modal').modal('hide');  
			        console.log(data);
			    }  
		   });  
		  
	 });
 }
</script>




 <script>  
$(document).ready(function()
{
	 $('#submit_form').on("submit", function(event)
	 {  
	        event.preventDefault();   

		    var data = {
		    	serial : "serial",
			    mobile : "mobile",
			    test :  "test",
			    date : "date"
		    }

		    $.ajax({  
			    url: $(this).attr("action"),
			    method:"post",  
			    beforeSend:function()
			    {  
			      $('#submit').val("Inserting");  
			    },  
			    success:function(data)
			    {  
			        $('#submit')[0].reset();  
			        $('#app_data_Modal').modal('hide');  
			        console.log(data);
			    }  
		   });  
		  
	 });
 }
 </script>


 <script>
 $('.selectpicker').selectpicker({
  style: 'btn-info',
  size: 4
});
</script>


