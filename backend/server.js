// backend/server.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send", (req, res) => {
  const { user_name, user_email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Replace with your email
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: user_email,
    to: "testnidhi0805@gmail.com",
    subject: `New Message from ${user_name}`,
    text: `Name: ${user_name}\nEmail: ${user_email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//google acc 2-factor security
//security >> 2FA >> Add App pswd >> create app and generate pswd || search in tab App pswd
//add in env
