

const models = require("../models");

class MessageController {
  static sendEmail = async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const message = req.body.message;


    res.send(
      await sendMail(
        "vhenuzya@yahoo.fr",
        "Verification email",
        getTemplate("email-confirmation", {firstname,lastname, email,message })
      )
    );
  };


  static browse = async (req, res) => {
    const [messages] = await models.messages.findAll();
    res.send(messages);
  };

  static add = async (req, res) => {
    await models.messages.insert(req.body);
    res.sendStatus(201);
  };

}
module.exports = MessageController;
