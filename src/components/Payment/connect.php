<?php
$servername = "DestinationSensation"
$fullName = "fullName";
$cardNumber = "cardNumber";
$exipiryDate = "exipiryDate";
$securityNum = "securityNum";

// Create connection
$conn = new mysqli($servername, $fullName, $cardNumber, $exipiryDate, $securityNum);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>


