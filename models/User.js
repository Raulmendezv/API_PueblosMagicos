// User.js
/* Clase que representa un Usuario */
const jwt = require("jsonwebtoken"); //Importando módulo jsonwebtoken, pendiente de instalar.
const secret = require("../config/index").secret;
const bcrypt = require("bcrypt-nodejs");
class User {
  constructor(
    User_ID,
    User_Name,
    User_Email,
    User_Password,
    User_Age,
    User_AboutMe,
    User_State,
    User_Gender,
    User_Reviews = [],
    User_Favorites = []
  ) {
    this.User_ID = User_ID;
    this.User_Name = User_Name;
    this.User_Email = User_Email;
    this.User_Password = User_Password;
    this.User_Age = User_Age;
    this.User_AboutMe = User_AboutMe;
    this.User_State = User_State;
    this.User_Gender = User_Gender;
    this.User_Reviews = User_Reviews;
    this.User_Favorites = User_Favorites;
  }

  generateJWT() {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign(
      {
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
      },
      secret
    );
  }

  toAuthUserJSON() {
    return {
      User_Username: this.User_Username,
      User_Email: this.User_Email,
      User_Token: this.generateJWT(),
    };
  }

  createPassword(password) {
    this.User_Password = bcrypt.hashSync(password, null, null);
  }
}
module.exports = User;
