<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';
require './src/config/db.php';

mb_language('uni');
mb_internal_encoding('UTF-8');

$app = new \Slim\App(array('debug' => true));

require './src/routes/legumes.php';
require './src/routes/commandes.php';

$app->run();