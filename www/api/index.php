<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';

// Loading env var from .env
$dotenv = new Dotenv\Dotenv("../../");
$dotenv->load();

// requiring the right db config file
try {
  if (file_exists("./private-config/".$_SERVER['SERVER_NAME'].".php"))
    require_once "./private-config/".$_SERVER['SERVER_NAME'].".php";
  else
    require_once './private-config/db.php' ;
  }
catch(Exception $e) {
  echo "Message : " . $e->getMessage();
  echo "Code : " . $e->getCode();
}

// MEDOO
require './src/config/medoo_conf.php';

// PHPMAILER
require './src/config/mail.php';

$app = new \Slim\App(array('debug' => true));

$app->add(new Tuupola\Middleware\JwtAuthentication([
  "path" => "/",
  "ignore" => ["/token", "/legumes", "/commandes/points-relais", "/commandes/add", "/mail"],
  "secret" => getenv("JWT_SECRET")
]));

//ROUTES
require './src/routes/legumes.php';
require './src/routes/commandes.php';
require './src/routes/token.php';


$app->run();