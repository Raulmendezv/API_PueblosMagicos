const passport = require("passport"); //Importando passport, middleware para autenticación.
const LocalStrategy = require("passport-local").Strategy; //Importando estrategia autenticación. --> passport-local
const Admin = require("../models/Admin");
const User = require("../models/User");
const pool = require("../models/index");
const bcrypt = require("bcrypt-nodejs");

passport.use(
  "admin-login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      pool.execute(
        `SELECT a.Admin_ID,a.Admin_Password,a.Admin_Username,ae.Admin_Email 
        FROM admin a INNER JOIN admin_email ae 
        ON ae.Admin_ID = a.Admin_ID WHERE ae.Admin_Email = ?`,
        [email],
        (err, results) => {
          if (err) return done(err);
          const admin = new Admin(
            results[0].Admin_ID,
            results[0].Admin_Username,
            results[0].Admin_Email,
            results[0].Admin_Password
          );
          if (!results.length) {
            return done(null, false, { error: "User not found" });
          }
          if (!bcrypt.compareSync(password, results[0].Admin_Password)) {
            return done(null, false, { error: "Wrong password" });
          }
          return done(null, admin);
        }
      );
    }
  )
);

passport.use(
  "user-login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      pool.execute(
        `SELECT u.User_ID,u.User_Password,u.User_Username,ue.User_Email 
          FROM user u INNER JOIN user_email ue 
          ON ue.User_ID = u.User_ID WHERE ue.User_Email = ?`,
        [email],
        (err, results) => {
          if (err) return done(err);
          const user = new User(
            results[0].User_ID,
            results[0].User_Username,
            results[0].User_Email,
            results[0].User_Password,
            results[0].User_Age,
            results[0].User_Bio,
            results[0].User_Gender
          );
          if (!results.length) {
            return done(null, false, { error: "User not found" });
          }
          if (!bcrypt.compareSync(password, results[0].User_Password)) {
            return done(null, false, { error: "Wrong password" });
          }
          return done(null, user);
        }
      );
    }
  )
);
