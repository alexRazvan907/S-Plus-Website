<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = " info@s-plus.nl";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;
    

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}

function clean_text($text, $html = true)
{ if($text == ""){return "";}
  $text = nl2br($text,false); // false gives <br>, true gives <br />
  $textary = explode("<br>",$text);
  foreach($textary as $key => $val)
  { $val = trim($val);
    $val = stripslashes($val);
    $val = htmlspecialchars($val);
    $textary[$key] = $val;
  }
  if ($html)
  { return implode("<br />",$textary);} //return implode("<br>",$textary);
  else
  { return implode("\r\n",$textary);}
}   