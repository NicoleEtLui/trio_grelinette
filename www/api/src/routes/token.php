<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use Firebase\JWT\JWT;
use Tuupola\Base62;

$app->post("/token",  function ($request, $response, $args) use ($container){
    /* Here generate and return JWT to the client. */
    //$valid_scopes = ["read", "write", "delete"]

  	$requested_scopes = $request->getParsedBody() ?: [];

    $now = new DateTime();
    $future = new DateTime("+10 minutes");
    $server = $request->getServerParams();
    $jti = (new Base62)->encode(random_bytes(16));
    $payload = [
        "iat" => $now->getTimeStamp(),
        "exp" => $future->getTimeStamp(),
        "jti" => $jti,
        "sub" => $server["PHP_AUTH_USER"]
    ];
    $secret = getenv("JWT_SECRET");
    $token = JWT::encode($payload, $secret, "HS256");
    $data["token"] = $token;
    // $data["expires"] = $future->getTimeStamp();
    // print_r($response);
    return $response->withStatus(201)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
});