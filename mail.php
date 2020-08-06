<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];

$length = $_POST['len'];
$width = $_POST['wid'];
$depth = $_POST['dep'];
$discount = $_POST['discount'];
$material = $_POST['mat'];
$area = $_POST['area'];

$what = $_POST['what'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ttvw01@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'qq987654321'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('ttvw01@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('ttvw01@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                    // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = 'Имя клиента: ' .$name . '<br>Телефон: ' .$phone. '<br>Почта этого пользователя: ' .$email. '<br><br>Клиента интересует ' .$what. '<br>Длинна: ' .$length. '<br>Ширина: ' .$width. '<br>Толщина: ' .$depth. '<br>Материал: ' .$material. '<br>Плоащадь: ' .$area. '<br>Клиент хочет скидку ' .$discount. '%';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html'); 
}
?>