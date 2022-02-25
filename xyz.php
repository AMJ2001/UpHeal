<?php
    $apno = $_POST["apno"];
	$fname = $_POST['username'];
    $lname = $_POST['lastname'];
	$city = $_POST['city'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];

	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("INSERT INTO registration(apno, fname, lname, city, email, pass) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("isssss", $apno, $fname, $lname, $city, $email, $pass);
		$execval = $stmt->execute();
		echo $execval;
		echo " Registration successfull";
		$stmt->close();
		$conn->close();
	}
?>

<html><body> <br><a href="index.html">return to homepage</a></body></html>
