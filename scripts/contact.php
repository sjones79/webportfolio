<?php

$name = $emailAddress = $message = $human = "";
$nameErr = "Only letters and white space allowed<br>";
$emailErr = "Invalid email format<br>";
$humanErr = "Incorrect response to are you a human<br>";
$errString = "";

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = cleanData($_POST['name']);
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
        $errString .= $nameError; 
    }
    
    $emailAddress = cleanData($_POST['email']);
    if (!filter_var($emailAddress, FILTER_VALIDATE_EMAIL)) {
        $errString .= $emailErr;
    }
    $message = cleanData($_POST['message']);
    $human = cleanData($_POST['human']);
    if($human != '9') {
        $errString .= $humanErr;
    }
}


function cleanData($data){
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data; 
}


?>