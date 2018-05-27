<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

// get all legumes

$app->get('/legumes', function (Request $request, Response $response){
    try {
      // return a set of array for each row instead of ORM classes instance
      // with find_many
      $legumes = Legumes::find_array();
      return $response->withJson($legumes, 200, JSON_UNESCAPED_UNICODE);
    } catch(PDOException $e) {
      echo '{"error": {"text", '.$e->getMessage().'}}';
    }
});
