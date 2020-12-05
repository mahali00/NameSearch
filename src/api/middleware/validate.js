const { hasNumberOrSymbol } = require("../../utils/util");

const validate = (req, res, next) => {
  const { input } = req.query;

  // check if input query is undefined
  if (input == undefined) {
    res.status(500).send({
      warning: "Missing required parameter in the the query string",
    });
  } else if (input == "") {
    res.status(500).send({
      warning: "No names found in the query Input :(",
    });
  }

  // check if input query has number or a symbol
  else if (hasNumberOrSymbol(input)) {
    res.status(500).send({
      warning: "I am built to recognize names, not numbers or symbols  :(",
    });
  }

  // check if input query has is a full name (firstName + lastName)
  else if (input.split(" ").length == 1) {
    res.status(500).send({
      warning: "Please enter first and last name",
    });
  } else {
    // move to next route handler
    return next();
  }
};

module.exports = validate;
