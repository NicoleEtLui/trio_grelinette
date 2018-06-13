<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
//Server settings
$mail->SMTPDebug = 3;                                 // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'ssl0.ovh.net';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'dev@triogrelinette.be';                 // SMTP username
$mail->Password = getenv("SMTP_DEV_SECRET");                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

//Recipients
$mail->setFrom('dev@triogrelinette.be', 'Mailer');
