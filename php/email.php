<?php

$something = $_POST['email'];

$dbuser = '';
$dbpass = '';
$dbh = new PDO( 'mysql:host=localhost; dbname=merkatus_emaildb', $dbuser, $dbpass );
$dbh->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
$dbh->setAttribute( PDO::ATTR_EMULATE_PREPARES, false );

//try {
$sql = 'INSERT into subscribers (email) values (?)';
$stmt = $dbh->prepare( $sql );
$stmt->bindValue( 1, $something, PDO::PARAM_STR );
//$stmt->execute( array(':email' => $something) );
//$stmt->bindParam( ':email', $something );
//echo $something;
//$array = array(":email" => $something);
//    $t = $stmt->execute();
//    echo $t;
if ( $stmt->execute() )
    {
//        echo $dbh->lastInsertId();
//    echo 200;
    require_once('MCAPI.class.php');  // same directory as store-address.php
// grab an API Key from http://admin.mailchimp.com/account/api/
    $api = new MCAPI( 'f8ec31dfe13439988b6943a538ab7de3-us3' );
//// grab your List's Unique Id by going to http://admin.mailchimp.com/lists/
//// Click the "settings" link for the list - the Unique Id is at the bottom of that page. 
    $list_id = "bf9848b0bd";
//
    if ( $api->listSubscribe( $list_id, $_POST['email'] ) === true )
        {
        // It worked!   
        echo 200;
        }
    else
        {
        // An error ocurred, return error message   
        echo 422;
        }
    }
else echo 422;
//}
//catch ( PDOException $e ) {
//    echo $e->getMessage();
//}
//$dbc = mysqli_connect( 'localhost', 'merkatus_a454130', 'a332211!', 'merkatus_emaildb' ) or die( 'Error connecting to Server' );
//if ( mysqli_query( $dbc, "INSERT INTO subscribers (email) VALUES ('$something')" ) )
//    {
//    
//    }
//else
//    {
//    
//    };
// If being called via ajax, autorun the function
?>