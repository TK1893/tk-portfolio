const nodemailer = require('nodemailer');

// Erstellen Sie einen Transporter für das Versenden von E-Mails
let transporter = nodemailer.createTransport({
  service: 'gmail', // Hier kannst du auch andere E-Mail-Anbieter verwenden
  auth: {
    user: 'tobiaskraft1@gmail.com', // Deine E-Mail-Adresse
    pass: 'nang rboa pawo pqyl', // Dein Passwort oder App-Passwort
  },
});

// Definieren der E-Mail-Optionen
let mailOptions = {
  from: 'your-email@gmail.com', // Absender-Adresse
  to: 'tobiaskraft1@gmail.com', // Empfänger-Adresse
  subject: 'Test E-Mail', // Betreff
  text: 'Dies ist eine Test-E-Mail von Nodemailer.', // E-Mail-Inhalt
};

// Versenden der E-Mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Fehler beim Versenden der E-Mail:', error);
  } else {
    console.log('E-Mail gesendet:', info.response);
  }
});
