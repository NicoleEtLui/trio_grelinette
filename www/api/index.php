<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';
require './src/config/db.php';

mb_language('uni');
mb_internal_encoding('UTF-8');

$app = new \Slim\App(array('debug' => true));
$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");

    return $response;
});

require './src/routes/legumes.php';

$app->run();