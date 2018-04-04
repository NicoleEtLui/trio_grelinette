<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

// get all legumes /api/public/legumes

$app->get('/legumes', function (Request $request, Response $response){
    $query = "SELECT * FROM legumes";

    try {
      // instance db class
      $db = new db();

      $db = $db->connect();

      $stmt = $db->query($query);
      $legumes = $stmt->fetchAll(PDO::FETCH_OBJ);
      $db = null;

      echo json_encode($legumes, JSON_UNESCAPED_UNICODE);

    } catch(PDOException $e) {
      echo '{"error": {"text", '.$e->getMessage().'}}';
    }
});

// get a legumes by its id /api/public/legumes/1

$app->get('/legumes/{id}', function (Request $request, Response $response, array $args) {
  $id = $args['id'];
  $query = "SELECT * from view_all_legumes WHERE leg_id=:id;";

  try {
    $db = new db();

    $dbConnection = $db->connect();

    $stmt = $dbConnection->prepare($query);
    $stmt->execute(array(':id' => $id));
    $legumes = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;

    echo json_encode($legumes, JSON_UNESCAPED_UNICODE);
  } catch(PDOException $e) {
    echo '{"error": {"text", '.$e->getMessage().'}}';
  }
});

// get a legumes by its label / api/public/legumes/label/tomate

$app->get('/legumes/label/{label}', function (Request $request, Response $response, array $args) {
  $label = $args['label'];
  $query = "SELECT * from view_all_legumes WHERE label=:label;";

  try {
    $db = new db();

    $dbConnection = $db->connect();

    $stmt = $dbConnection->prepare($query);
    $stmt->execute(array(':label' => $label));
    $legumes = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;

    echo json_encode($legumes, JSON_UNESCAPED_UNICODE);
  } catch(PDOException $e) {
    echo '{"error": {"text", '.$e->getMessage().'}}';
  }
});