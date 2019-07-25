<?php 
  $username = $_POST["username"];
  $password = $_POST["password"];
  
  $dbhost = "localhost";
  $dbuser = "root";
  $dbpass = "";
  $db = "task";
  $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

  $sql = "SELECT username FROM user WHERE username='". $username ."'";
  $result = $conn->query($sql);

  if ($result->num_rows == 0){
    $stmt = $conn->prepare("INSERT INTO user (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $stmt->close();

    $sql_1 = "SELECT id,username FROM user WHERE username='". $username ."'";
    $result_1 = $conn->query($sql_1);
  
    if($result_1->num_rows > 0){
      while($row = $result_1->fetch_assoc()) {
        $string = array("id" => $row["id"], "username" => $row["username"]);
        echo json_encode($string);
    }
    }
  }

  $conn->close();
?>
