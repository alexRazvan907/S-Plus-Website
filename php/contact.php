<?php

$email = $_POST['mail'];
$name = $_POST['name'];
$message = $_POST['message'];

$dbc = mysqli_connect( 'localhost', 'merkatus_a454130', 'a332211!', 'merkatus_emaildb' ) or die( 'Error connecting to Server' );

if ( mysqli_query( $dbc, "INSERT INTO contact (name) VALUES ('$something')" ) )
    {
    echo 200;
    }
else
    {
    echo 422;
    };

return 'stuff';
?>