const path = require("path");
const express = require("express")

const {
  MessageController,
  WebController,
} = require("./controllers");

const router = express.Router();


router.get("/messages", MessageController.browse);
router.post("/messages", MessageController.add);


router.get("/web", WebController.home);

module.exports = router;
