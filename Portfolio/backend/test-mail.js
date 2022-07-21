const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 1026,
  secure: false,
});
const message = {
  from: "sender@server.com",
  to: "venuzya@yahoo.fr",
  subject: "Hello Venuzia",
  text: "Contente de découvrir ducker",
  html: "<p>HTML version of the message</p>",
};

transporter.sendMail(message);
    