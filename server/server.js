// server\server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist'))); // Serve static files from Parcel's output

// Route to handle form submission
app.post('/send', (req, res) => {
  const { email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tobiaskraft1@gmail.com',
      pass: 'nang rboa pawo pqyl', // Ersetze dies durch dein App-Passwort
    },
    debug: true, // Aktiviert Debugging-Informationen
  });

  // Setup email data
  let mailOptions = {
    from: email, // Sender address
    to: 'tobiaskraft1@gmail.com', // Deine E-Mail-Adresse (Empfänger)
    subject: 'Contact Form Submission',
    text: `Message from ${email}: ${message}`, // Plain text body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email: ' + error.message);
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully!');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
