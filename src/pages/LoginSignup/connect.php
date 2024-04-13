<?php
$servername = "DestinationSensation"
$fullName = "fullName";
$email = "email";
$password = "password";

// Create connection
$conn = new mysqli($servername, $fullName, $email, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>