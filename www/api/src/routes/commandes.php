<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

// get

$app->get('/commandes/{id}', function (Request $request, Response $response,
array $args){
    $id = $args['id'];
    $query = "SELECT L.label, CL.nbUnite
    from comm_leg as CL JOIN legumes as L ON (L.leg_id = CL.leg_id)
    WHERE com_id=:id GROUP BY CL.com_id, L.label";

    try {
      // instance db class
      $db = new db();

      $dbConnection = $db->connect();

      $stmt = $dbConnection->prepare($query);
      $stmt->execute(array(':id' => $id));
      $legumes = $stmt->fetchAll(PDO::FETCH_OBJ);
      $db = null;

      return json_encode($legumes, JSON_UNESCAPED_UNICODE);
    } catch(PDOException $e) {
      echo '{"error": {"text", '.$e->getMessage().'}}';
    }
});