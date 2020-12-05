const express = require("express");
const config = require("./src/config/index");
const nameSearch = require("./src/api/routes/nameSearch");

/*********************************
Initialize express and middlwares
**********************************/

const app = express();
app.use(express.json());

/*********************
 Check Status of API
***********************/

app.get("/status", (req, res) => {
  res.status(200).end();
});
app.head("/status", (req, res) => {
  res.status(200).end();
});

/*********************
 API Routes
***********************/

/** 

  example calls

  Fail Case
  http://localhost:4000/search?input=mahali+asma#h2  //includes symbol and number
  http://localhost:4000/search?input=mahali+asmah // only a first name input
  http://localhost:4000/search?input= //input query is empty

  Success Case
  http://localhost:4000/search?input=mahali+asmah

*/

app.use("/search", nameSearch);

/*************************************
 Start node app and listen on set port
**************************************/

PORT = config.port || 4000;

app
  .listen(PORT, () => {
    console.log(`
      ####################################
      🚀 Server listening on port: ${PORT} 🚀
      ####################################
    `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
