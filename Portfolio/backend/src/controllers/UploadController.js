const fs = require("fs");
const path = require("path");

const uploadDir = path.resolve(__dirname, "..", "..", "public", "uploads");

class UploadController {
  static upload = async (req, res) => {
    res.send(`/uploads/${req.file.filename}`);
  };

  static browse = async (req, res) => {
    res.send(fs.readdirSync(uploadDir).filter((file) => !file.startsWith(".")));
  };

  static delete = async (req, res) => {
    try {
      fs.unlinkSync(`${uploadDir}/${req.params.fileName}`);
    } catch (err) {
      console.log(err);
    }

    res.sendStatus(204);
  };
}

module.exports = UploadController;
