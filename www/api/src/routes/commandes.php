<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->post('/commandes/add', function(Request $request, Response $response) use ($database) {
  try {
    //parsedbody slim
    $database->insert("commandes", [
      "cli_id" => "bidule@exemple.com",
      "date_com" => "2018-05-27"
    ]);
    $database->insert("comm_leg", [
      "com_id" => "8",
      "leg_id" => "1",
      "nbUnite" => "45"
    ]);
  } catch(PDOException $e) {
    echo '{"error": {"text", '.$e->getMessage().'}}';
  }

});
