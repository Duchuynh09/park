const express = require("express");
const contacts = require("../controllers/contact.controller.js");
const multer = require("multer")();
const router = express.Router();
router
  .route("/user")
  .get(contacts.findAllUser)
  .post(multer.any(), contacts.createUser);
router
  .route("/user/:id")
  .get(contacts.findOneUser)
  .put(contacts.updateUser)
  .delete(contacts.delete);
router.route("/").get(contacts.findAllPark);
router.route("/:id").put(contacts.updateArea);
// update park

module.exports = router;
