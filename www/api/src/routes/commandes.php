<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

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

$app->post('/commandes/add', function(Request $request, Response $response) use ($database) {
  $data = $request->getParsedBody();
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
    foreach ($data['listeLegumes']['cart'] as $value){
      $database->insert("com_leg", [
        "com_id" => $last_commande_id,
        "leg_id" => $value['leg_id'],
        "nb_unite" => $value['quantity']
      ]);
    }

  } catch(PDOException $e) {
    echo '{"error": {"text", '.$e->getMessage().'}}';
  }
});
