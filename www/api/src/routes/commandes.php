<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->post('/commandes/add', function(Request $request, Response $response) use ($database) {
  $data = $request->getParsedBody();
  // console_log($data);
  try {
    //parsedbody slim
    $database->insert("commandes", [
      "cli_id" => $data['commande']['cli_id'],
      "date_com" => "2018-05-27"
    ]);
    //récupérer l'i de la commande pour le passer a comm_leg
    //map over each array command
    $database->insert("comm_leg", [
      "com_id" => "8",
      "leg_id" => "1",
      "nbUnite" => "45"
    ]);
  } catch(PDOException $e) {
    echo '{"error": {"text", '.$e->getMessage().'}}';
  }

});
