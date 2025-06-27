<?php 
//Database connection parameters local host 
     $host = "localhost";
     $userName = "root";
     $password = "";
     //crete connection
     $conn = new mysqli ($host,$userName,$password);
     //check connection
     if ($conn->connect_erro) {
        die ("Connection failed: ".$conn->connect_error");
     }
     echo "connected successfully! <br>";
     ?>

     