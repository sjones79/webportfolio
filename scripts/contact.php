<?php

$name = $emailAddress = $message = $human = "";
$nameErr = "Only letters and white space allowed<br>";
$emailErr = "Invalid email format<br>";
$msgErr = " Please enter a message<br>";
$humanErr = "Incorrect response to are you a human<br>";
$errString = "";

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = cleanData($_POST['name']);
    if (empty($name) || !preg_match("/^[a-zA-Z ]*$/",$name)) {
        $errString .= $nameErr; 
    }
    
    $emailAddress = cleanData($_POST['email']);
    if (empty($emailAddress) || !filter_var($emailAddress, FILTER_VALIDATE_EMAIL)) {
        $errString .= $emailErr;
    }
    $message = cleanData($_POST['message']);
    if(empty($message)){
        $errString .= $msgErr;
    }
    $human = cleanData($_POST['human']);
    if(empty($human) || $human != '9') {
        $errString .= $humanErr;
    }
    
    if(!empty($errString)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
    } else {
        sendMail($name, $emailAddress, $message);
    }
} else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }


function cleanData($data){
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data; 
}

function sendMail ($name, $emailAddress, $message) {
    // Set the recipient email address.
    $recipient = "info@capoeiradetroit.org";

    // Set the email subject.
    $subject = "Online resume viewed by $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $emailAddress\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$emailAddress>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}


?>