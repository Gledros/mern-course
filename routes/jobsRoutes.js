import express from "express";
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats
} from "../controllers/jobController.js";

router.route("/").post(createJob).get(getAllJobs);

router.route("/showStats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
