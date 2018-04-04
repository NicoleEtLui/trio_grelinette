<?php
class db {
  private $dbhost = 'triogreliadev.mysql.db';
  private $dbuser = 'dev';
  private $dbpw = 'tri0Gr3lin3tt3';
  private $dbname = 'triogreliadev';

  //Connection

  public function connect(){
    $mysql_connect_str = "mysql:host=$this->dbhost;dbname=$this->dbname;";
    $dbConnection = new PDO($mysql_connect_str, $this->dbuser, $this->dbpw);
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbConnection;
  }

}