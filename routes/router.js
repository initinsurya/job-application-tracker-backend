const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  addJob,
  deleteJob,
  updateJob,
} = require("../controller/admin");

router.route("/getAllJobs").get(getAllJobs);
router.route("/admin/addJob").post(addJob);
router.route("/admin/deleteJob").post(deleteJob);
router.route("/admin/updateJob").put(updateJob);

module.exports = router;
