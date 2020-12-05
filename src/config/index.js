const dotenv = require("dotenv");

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  /**
   * port
   */
  port: parseInt(process.env.PORT, 10),
  /**
   * API configs
   */
  apiUrl: process.env.API_URL,
};
