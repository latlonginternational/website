<?php
header('Content-Type: application/json');

// Définir les destinataires
$recipients = [
    "test@wito-inc.com",
    "info@latlongcongo.com"
];

// Lire les valeurs du formulaire
$success = false;
$name = isset($_POST['name']) ? preg_replace("/[^\.\-\' a-zA-Z0-9]/", "", $_POST['name']) : "";
$email = isset($_POST['email']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email']) : "";
$phone = isset($_POST['phone']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone']) : "";
$subject = isset($_POST['subject']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['subject']) : "";
$message = isset($_POST['message']) ? preg_replace("/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message']) : "";

// Vérifier que tous les champs requis sont remplis
if (!$name || !$email || !$phone || !$subject || !$message) {
    echo json_encode([
        'success' => false,
        'message' => 'Veuillez remplir tous les champs requis.'
    ]);
    exit;
}

// Vérifier le format de l'email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'Veuillez entrer une adresse email valide.'
    ]);
    exit;
}

// Vérifier le format du numéro de téléphone (format congolais)
if (!preg_match('/^\+243[0-9]{9}$/', $phone)) {
    echo json_encode([
        'success' => false,
        'message' => 'Veuillez entrer un numéro de téléphone valide au format +243XXXXXXXXX.'
    ]);
    exit;
}

$mail_subject = 'Nouveau message de contact - ' . $subject;

$body = "Nouveau message de contact depuis le site web LatLong International\n\n";
$body .= "Nom: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Téléphone: " . $phone . "\n";
$body .= "Sujet: " . $subject . "\n\n";
$body .= "Message:\n" . $message;

$headers = "From: " . $name . " <" . $email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$success = true;
$error_message = '';

// Envoyer l'email à tous les destinataires
foreach ($recipients as $recipient) {
    if (!mail($recipient, $mail_subject, $body, $headers)) {
        $success = false;
        $error_message = "Erreur lors de l'envoi de l'email.";
        break;
    }
}

echo json_encode([
    'success' => $success,
    'message' => $success ? 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt.' : $error_message
]);