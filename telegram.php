<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$adress = $_POST['adress'];
$par = $_POST['par'];
$title = $_POST['title'];
$size = $_POST['size'];
$price = $_POST['price'];


$token = "5458501936:AAFNwuGja_j5FJHR2WzsOutvSVQSlEZOo4w";
$chat_id = "-825651915";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Связь: ' => $email,
  'Адресс: ' => $adress,
  'Количество: ' => $par,
  'Название: ' => $title,
  'Размер: ' => $size,
  'Цена: ' => $price



);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
    header('Location: thanks.html');
  } else {
    echo "Error";
  }
?>