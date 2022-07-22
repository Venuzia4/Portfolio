const nodemailer = require("nodemailer");
const Mustache = require("mustache");
const fs = require("fs");
const path = require("path");

const { MAILER_PORT, MAILER_HOST, MAILER_USER, MAILER_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  port: MAILER_PORT ?? 1025,
  host: MAILER_HOST ?? "localhost",
  secure: false, // true for 465, false for other ports
  auth: {
    user: MAILER_USER,
    pass: MAILER_PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

const sendMail = async (to, subject, content, attachments = []) => {
  const mailData = {
    from: MAILER_USER ?? "helloe@gmail.com",
    to,
    subject,
    html: content,
    attachments,
  };

  const mail = await transporter.sendMail(mailData);

  return mail;
};

/**
 * Retourne le contenu du template donnée, avec les data substituées
 *
 * @param {String} name Le nom du template de mail (sans .tpl.html)
 * @param {String} data Les données du template
 *
 * @returns {String}
 */
const getTemplate = (name, data) => {
  const templateFile = path.resolve(
    __dirname,
    "..",
    "templates",
    `${name}.tpl.html`
  );

  return Mustache.render(fs.readFileSync(templateFile, "utf8"), data);
};

module.exports = {
  sendMail,
  getTemplate,
};