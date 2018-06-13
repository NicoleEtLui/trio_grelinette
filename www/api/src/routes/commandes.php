<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$app->get('/commandes', function(Request $request, Response $response) use ($database) {
  try {
    $commandes = $database->select("commandes", [
      "com_id",
      "cli_id",
      "cli_name",
      "cli_tel",
      "date_com",
      "point_relais_id",
      "prix"
    ]);
    return $response->withJson($commandes, 200, JSON_UNESCAPED_UNICODE);
  } catch(PDOException $e) {
    echo '{"error": {"text", '.$e->getMessage().'}}';
  }
});

$app->get('/commandes/points-relais', function(Request $request, Response $response) use ($database) {
  try {
    $points_relais = $database->select("points_relais", [
      "point_relais_id",
      "photo",
      "pr_desc"
    ]);
    return $response->withJson($points_relais, 200, JSON_UNESCAPED_UNICODE);
  } catch(PDOException $e) {
    echo '{"error": {"text", '.$e->getMessage().'}}';
  }
});

$app->post('/commandes/add', function(Request $request, Response $response) use ($database, $mail) {
  $data = $request->getParsedBody();
  $cart = $data['listeLegumes']['cart'];
  $htmlCommande = '';

  try {
    $database->insert("commandes", [
      "cli_id" => $data['cli_id'],
      "cli_name" => $data['cli_name'],
      "cli_tel" => $data['cli_tel'],
      "date_com" => $data['date_com'],
      "point_relais_id" => $data['point_relais_id']
    ]);

    $last_commande_id = $database->id();
    //map over each array command
    foreach ($cart as $value){
      $database->insert("com_leg", [
        "com_id" => $last_commande_id,
        "leg_id" => $value['leg_id'],
        "nb_unite" => $value['quantity']
      ]);
      $htmlCommande .= '<div><span>'. $value['quantity'] . ' / ' . $value['unite'] . '</span> de <span>' . $value['label'] .'</span></div>';
    }
  } catch(PDOException $e) {
    echo '{"error": {"text", '.$e->getMessage().'}}';
  }

  $mail->setFrom('dev@triogrelinette.be', 'Le trio de la Grelinette');
  $mail->addAddress($data['cli_id'], $data['cli_name']);

  $mail->isHTML(true);
  $mail->Subject = 'Votre commande de légumes !';
  $mail->Body    = <<<EOT
  <div><b>Résumé de votre commande</b></div><br>
  <div>$htmlCommande</div><br>
  <div>Merci de votre commande , à bientôt !"
EOT;
  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  try {
    $mail->send();
    echo 'Message has been sent';
  } catch (Exception $e) {
    $error = 'Message could not be sent. Mailer Error: '. $mail->ErrorInfo;
    return $response->withJson($error, 400, JSON_UNESCAPED_UNICODE);
  }
});
