<?php
class db {
  private $dbhost = 'localhost';
  private $dbuser = 'postgres';
  private $dbpw = 'root';
  private $dbport = '8080';
  private $dbname = 'triog';

  //Connection

  public function connect(){
    $pgsql_connect_str = "pgsql:host=$this->dbhost;port=$this->dbport;dbname=$this->dbname;user=$this->dbuser;password=$this->dbpw";
    $dbConnection = new PDO($pgsql_connect_str, $this->dbuser, $this->dbpw);
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbConnection;
  }

}