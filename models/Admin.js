// Admin.js
/* Clase que representa un Administrador */
const jwt = require("jsonwebtoken"); //Importando módulo jsonwebtoken, pendiente de instalar.
const secret = require("../config/index").secret;
const bcrypt = require("bcrypt-nodejs");
class Admin {
  constructor(Admin_ID, Admin_UserName, Admin_Email = [], Admin_Password) {
    this.Admin_ID = Admin_ID;
    this.Admin_UserName = Admin_UserName;
    this.Admin_Email = Admin_Email;
    this.Admin_Password = Admin_Password;
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

  toAuthAdminJSON() {
    return {
      Admin_Username: this.Admin_Username,
      Admin_Email: this.Admin_Email,
      Admin_Token: this.generateJWT(),
    };
  }

  createPassword(password) {
    this.Admin_Password = bcrypt.hashSync(password, null, null);
  }
}

module.exports = Admin;
