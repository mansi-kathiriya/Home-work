const express = require("express");
const { musicValidation } = require("../../validations");
const { musicController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Music
router.post(
  "/create-music",
  validate(musicValidation.createMusic),
  musicController.createMusic
);

// Get Music list
router.get(
  "/music-list",
  musicController.getMusicList
);

// get Music details by id
router.get(
  "/get-details/:musicId",
  musicController.getMusicDetails
)

// update Music
router.put(
  "/update-music/:musicId",
  musicController.updateMusic
)

// delete Music
router.delete(
  "/delete-music/:musicId",
  musicController.deleteRecord
)

module.exports = router;