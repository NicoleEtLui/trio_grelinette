<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$app->get('/mail', function(Request $request, Response $response) use ($database) {
  try {
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
  $mail->setFrom('dev@triogrelinette.be', 'Le trio de la Grelinette');
  $mail->addAddress('machin5@example.com', 'fuck');

  $mail->isHTML(true);
  $mail->Subject = 'Votre commande de légumes !';
  $mail->Body    = 'envoyé depuis /mail';
  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
  } catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
  }
});