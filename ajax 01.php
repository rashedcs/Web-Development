ideone.com/ZaY9Lv





index.php =>
<html>
 <head>
   <title>Scholl Record</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
   <script>
		function ajax_request(add_new_record)
		{
			var student_name = document.getElementById('student_name').value;
			var student_subject = document.getElementById('student_subject').value;
			var student_subject = document.getElementById('student_fee').value;
			
			if(add_new_record==undefined)
			{
				add_new_record = '';
			}
			else
			{
				alert(add_new_record);
			}
			if(student_name='')
			{
				student_name='';
			}
			if(student_subject=='')
			{
				student_subject='';
			}
		   if(student_fee=='')
			{
				student_fee='';
			}
			var xmlhttp = new XMLHttpRequest();
			
			xmlhttp.onreadystatechange = function()
			{
				if(xmlhttp.readState == 4 && xmlhttp.status == 200)
				{
				  var test_div = document.getElementById('test');
				  test_div.innerHTML = xmlhttp.responseText;
				}
			}
			xmlhttp.open('GET', 'data.php?add_req=' +add_new_record+ '&stu_name=' +student_name+ 
      '&stu_subject=' +student_subject+ '&stu_fee=' +student_fee,true);
			xmlhttp.send();		
		}
		</script
    
    
    
    
    
    data.php =>
    
   <?php
  include 'db.php';
  
  if($_REQUEST['add_req']!='')
  {
	  $student_name = $_REQUEST['stu_name'];
	  $student_subject = $REQUEST['student_subject'];
	  $student_fee = $_REQUEST['student_fee'];
	  $ins_sql = "insert into student_data(student_name, student_subject,student_fee) 
    values('$student_name','$student_subject','$student_fee')";
	  $run_sql = mysqli_query($conn, $ins_sql);
	  
	  $sql = "select * from student_data";
	  $run = mysqli_query($conn, $sql);
	  
	  while($rows = mysqli_fetch_assoc($run)) 
	  {?>
		<tr>
			<td> 2 </td>
			<td> <?php echo $rows['student_name']; ?></td>
			<td> <?php echo $rows['student_subject']; ?> </td>
			<td> <?php echo $rows['student_fee']; ?> </td>
			<td> 
				<div class="dropdown">
				  <button class="btn btn-primary" data-toggle="dropdown" >Actions <span class="caret"> </span> </button>
					<ul class="dropdown">
						<li> <a href="#">Edit </a> </li>
						<li> <a href="#">Delete </a> </li>
					</ul>
				 </div>
			 </td>
			</tr>
		<?php
	  }
	  ?>
	  }
  }
?>


  db.php =>
  
<?php
	$server = 'localhost';
	$user = 'rasu' ;
	$password = '';
	$db = 'test'

	$conn = mysqli_connect($server, $user, $password, $db);
?>
    
    
    
    
    
    
    
    
    

    
