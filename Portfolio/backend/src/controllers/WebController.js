const fs = require("fs");
const path = require("path");
const Mustache = require("mustache");

const models = require("../models");

const getTemplate = (name, data = {}) => {
  const templateFile = path.resolve(
    __dirname,
    "..",
    "templates",
    `${name}.html`
  );

  return Mustache.render(fs.readFileSync(templateFile, "utf8"), data);
};

class WebController {
  static home = async (req, res) => {
    const [messages] = await models.messages.findAll();

    res.send(
      getTemplate("home", {
        title: "Messages",
        messages,
      })
    );
  };
}

module.exports = WebController;
