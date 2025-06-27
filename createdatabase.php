<?php
      //Include connection file
     include 'connection.php';
     //Create database 
     $sql = "CREATE DATABASE ExousiaEA";
     if ($conn->query($sql)===TRUE) {
        echo "Database created successfully!<br>";
    
     } else {
        echo "Error creating database:" .$conn->. "<br>";
     } 
     // close connection
     $conn->close();

?>


