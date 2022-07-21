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
    const [games] = await models.games.findAll();

    res.send(
      getTemplate("home", {
        title: "Games list",
        games,
      })
    );
  };
}

module.exports = WebController;
