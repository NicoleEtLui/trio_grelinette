<?php

use Medoo\Medoo;

$db = new db();

$database = new Medoo([
	// required
	'database_type' => 'mysql',
	'database_name' => $db->getName(),
	'server' => $db->getHost(),
	'username' => $db->getUser(),
	'password' => $db->getPwd(),

	// [optional]
	'charset' => 'utf8',
	'port' => 3306,

	// [optional] Enable logging (Logging is disabled by default for better performance)
	'logging' => true,

	// [optional] Medoo will execute those commands after connected to the database for initialization
	'command' => [
		'SET SQL_MODE=ANSI_QUOTES'
	]
]);