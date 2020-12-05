const express = require("express");
const router = express.Router();
const axios = require("axios");
const validate = require("../middleware/validate");
const { logDataToConsole } = require("../../utils/util");
const config = require("../../config/index");

router.get("/", validate, async (req, res) => {
  const { input } = req.query;
  axios
    .get(config.apiUrl, {
      params: {
        input,
      },
    })
    .then((response) => {
      // log data to console
      logDataToConsole(response.data);

      res.status(200).send({
        status: "success",
        data: response.data,
      });
    })
    .catch((error) => {
      // handle errors
      res.send({
        status: "failed",
        data: error,
      });
    });
});

module.exports = router;
