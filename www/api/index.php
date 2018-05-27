<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';

// require ORM
require_once '../../vendor/j4mie/idiorm/idiorm.php';
require_once '../../vendor/j4mie/paris/paris.php';

require("./src/Models/Legumes.php");

// requiring the right db config file
try {
  if (file_exists("./private-config/".$_SERVER['SERVER_NAME'].".php"))
    require_once("./private-config/".$_SERVER['SERVER_NAME'].".php");
  else
    require_once('./private-config/db.php' );
  }
  catch(Exception $e) {
    echo "Message : " . $e->getMessage();
    echo "Code : " . $e->getCode();
  }

$db = new db();

ORM::configure('mysql:host='.$db->getHost().';dbname='.$db->getName());
ORM::configure('username', $db->getUser());
ORM::configure('password', $db->getPwd());

mb_language('uni');
mb_internal_encoding('UTF-8');

// no use of namespace when translating table name
Model::$short_table_names = true;

$app = new \Slim\App(array('debug' => true));

//---------------- temp: we can delete it normally, used to handle CROSS problem
  $app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
  });

  $app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  });
// ---------------------------------------------------------------------end temp

require './src/routes/legumes.php';
require './src/routes/commandes.php';

// Catch-all route to serve a 404 Not Found page if none of the routes match
// NOTE: make sure this route is defined last
$app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
  $handler = $this->notFoundHandler; // handle using the default Slim page not found handler
  return $handler($req, $res);
});

$app->run();