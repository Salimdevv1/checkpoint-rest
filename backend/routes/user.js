const express = require("express");
const {
  createUser,
  getUsers,
  getuser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const { uservalidator, validate } = require("../middlewares/validators");

const router = express.Router();

router.post("/add",  createUser);
router.get("/all", getUsers);
router.get("/:id", getuser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
