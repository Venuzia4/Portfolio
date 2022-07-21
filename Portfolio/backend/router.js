const path = require("path");
const express = require("express");
const multer = require("multer");

const {
  GameController,
  UserController,
  UploadController,
} = require("./controllers");

const router = express.Router();

// Configure uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "..", "public", "uploads"));
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/games", GameController.browse);
router.get("/games/:id", GameController.read);
router.put("/games/:id", GameController.edit);
router.post("/games", GameController.add);
router.delete("/games/:id", GameController.delete);

router.post("/login", UserController.login);
router.get("/me", UserController.me);

router.post("/uploads", upload.single("avatar"), UploadController.upload);
router.get("/uploads", UploadController.browse);
router.delete("/uploads/:fileName", UploadController.delete);

module.exports = router;
