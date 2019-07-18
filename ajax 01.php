/* index.php */
<html>
 <head>
   <title>School Record</title>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
 
     <style>
		.btn, .form-control
		{
			border-radius: 0;
		}
	</style>
	</head>
 
	<body>
		<div class="container">
			<div class="jumbotron">
				<h1>School Record</h1>
			</div>
 
			<div class="form-horizontal">
 
				<div class="form-group">
					<label class="control-label col-md-2">Student Name </label>
					<div class="col-md-8">
						<input type="text" id="student_name" class="form-control">
					</div>
				</div>
 
				<div class="form-group">
					<label class="control-label col-md-2">Student Subject </label>
					<div class="col-md-3">
						<select id="student_subject" class="form-control">
							<option> Psychology </option>
							<option> Bangla </option>
						</select>
					</div>
				</div>
 
				<div class="form-group">
				    <label class="control-label col-md-2">Student Fee</label>
				    <div class="col-md-3">
					   <input type="number" id="student_fee" class="form control">
				   </div>
				</div>
 
 
				<div class="form-group">
					<div class="col-md-8 col-md-offset-2">
						<button class="btn btn-danger btn-block" onclick="myfunction();"> Add New Record </button>
					</div>
				</div>
			</div>
 
			<table class="table table-striped">
					<thead> 
						<tr class="success">
							<th>S no </th>
							<th> Student Name </th>
							<th> Student Subject </th>
							<th> Student Fee </th>
							<th> Actions </th>
						</tr>
					</thead>
					<tbody id="test">
					</tbody>
				</table>
			</div>
			
			
	   <script>
		function myfunction()
		{
			var student_name = document.getElementById('student_name').value;
			var student_subject = document.getElementById('student_subject').value;
			var student_fee = document.getElementById('student_fee').value;

 
			var request = new XMLHttpRequest();
			request.onreadystatechange = function() 
			{
				if (request.readyState == 4 && request.status == 200)
				{
				   document.getElementById("test").innerHTML = request.responseText;
				}
			};
			 request.open("POST","data.php?name="+student_name+"&subject="+student_subject+"&fee="+student_fee,true);
			 request.send();
		}
	   </script>
</body>
</html>






<?php
    /* data.php */
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname="test";

		$conn = new mysqli($servername, $username, $password , $dbname);
		
		
		if ($conn->connect_error) 
		{
			die("Connection failed: " . $connection->connect_error);
		}


		$student_name = $_REQUEST['name'];
		$student_subject =  $_REQUEST['subject'];
		$student_fee =  $_REQUEST['fee'];
		$ins_sql = "insert into student_data(student_name, student_subject,student_fee)  values('$student_name','$student_subject','$student_fee')"; /* name : string, subject: string, fee: integer */
		$run_sql = mysqli_query($conn, $ins_sql);
		$sql = "select * from student_data";
		$run = mysqli_query($conn, $sql);
		  
		  
		echo "<table>
		<tr>
		<th>Id</th>
		<th> Name</th>
		<th>Born</th>
		</tr>";
		while($row = mysqli_fetch_array($run)) 
		{
			echo "<tr>";
			echo "<td>" . $row['student_name'] .  "</td>";
			echo "<td>" . $row['student_subject'] . "</td>";
			echo "<td>" . $row['student_fee'] . "</td>";
			echo "</tr>";
		}
		echo "</table>";
	  
?>
//Daught : ideone.com/ZaY9Lv




