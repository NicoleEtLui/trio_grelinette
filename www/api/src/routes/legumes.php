<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

// get all legumes
$app->get('/legumes', function (Request $request, Response $response ) use ($database) {

    try {
      $legumes = $database->select("legumes", [
        "leg_id",
        "label",
        "photo",
        "leg_desc",
        "unite",
        "prix",
        "quantite"
      ]);
      return $response->withJson($legumes, 200, JSON_UNESCAPED_UNICODE);
    } catch(PDOException $e) {
      echo '{"error": {"text", '.$e->getMessage().'}}';
    }
});
