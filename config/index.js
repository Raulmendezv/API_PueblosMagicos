require("dotenv").config();

module.exports = {
  secret:
    process.env.NODE_ENV === "production" ? process.env.SECRET : "bedu2021",
};
