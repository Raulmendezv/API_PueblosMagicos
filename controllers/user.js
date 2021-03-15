const { toMatrix } = require("../helpers");
const pool = require("../models/index");
const passport = require("passport");
const User = require("../models/User");

function userLogIn(req, res, next) {
  if (!req.body.email) {
    return res.status(422).json({ errors: { email: "No puede estar vacio" } });
  }
  if (!req.body.password) {
    return res
      .status(422)
      .json({ errors: { password: "No puede estar vacio" } });
  }

  passport.authenticate("user-login", { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (user) {
      user.token = user.generateJWT();
      return res.json({ user: user.toAuthUserJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
}

function addUser(req, res) {
  const pass = req.body.User_Password;
  delete req.body.User_Password;
  const user = new User(
    req.body.User_ID,
    req.body.User_Username,
    req.body.User_Email,
    req.body.User_Password,
    req.body.User_Age,
    req.body.User_Bio,
    req.body.User_Gender
  );
  user.createPassword(pass);
  let insertedID;
  pool.getConnection((err, conn) => {
    if (err) throw err;
    conn.beginTransaction((err) => {
      if (err) throw err;
    });
    try {
      conn.query(
        `INSERT INTO user(User_Password,User_Username,User_Age,
          User_Gender,User_State,User_Bio,User_Photo)
         VALUES (?,?,?,?,?,?,?)`,
        [
          user.User_Password,
          req.body.User_Username,
          req.body.User_Age,
          req.body.User_Gender,
          req.body.User_State,
          req.body.User_Bio,
          req.body.User_Photo,
        ],
        (err, results) => {
          if (err) throw err;
          insertedID = results.insertId;

          const userMails = toMatrix(req.body.User_Email, insertedID);
          for (let i = 0; i < userMails.length; i++) {
            conn.query(
              `INSERT INTO user_email(User_ID,User_Email) VALUES (?,?)`,
              userMails[i],
              (err, results) => {
                if (err) throw err;
              }
            );
          }
          conn.commit((err) => {
            if (err) throw err;
          });

          res.json(user.toAuthUserJSON());
        }
      );
    } catch (err) {
      conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  });
}

function getAllTowns(req, res) {
  // Code
  pool.query("SELECT * FROM town", function (err, results) {
    if (err) throw err;
    res.json(results);
  });
}

function getTownByID(req, res) {
  // Code
  pool.execute(
    "SELECT * FROM town WHERE Town_ID = (?)",
    [req.params.id],
    (err, results) => {
      if (err) throw err;
      res.json(results[0]);
    }
  );
}

function addTownToFavorites(req, res) {
  // Code
  pool.getConnection((err, conn) => {
    if (err) throw err;
    conn.beginTransaction((err) => {
      if (err) throw err;
    });
    try {
      conn.query(
        `INSERT INTO user_favorites (User_ID,Town_ID) VALUES (?,?)`,
        [parseInt(req.params.userId), parseInt(req.params.id)],
        (err, results) => {
          if (err) throw err;
        }
      );
      conn.query(
        `SELECT t.Town_Name,t.Town_Biome,t.Town_Weather,t.Town_Incorporation_Year,t.Town_State 
        FROM town t INNER JOIN user_favorites ON user_favorites.Town_ID=t.Town_ID 
        INNER JOIN user ON user.User_ID= user_favorites.User_ID WHERE user.User_ID= (?);`,
        [parseInt(req.params.userId)],
        (err, results) => {
          if (err) throw err;
          res.json(results);
        }
      );
      conn.commit();
    } catch (err) {
      conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  });
}

function deleteTownFromFavorites(req, res) {
  // Code
  pool.getConnection((err, conn) => {
    if (err) throw err;
    conn.beginTransaction((err) => {
      if (err) throw err;
    });
    try {
      conn.query(
        `DELETE FROM user_favorites WHERE User_ID = (?) AND Town_ID = (?)`,
        [parseInt(req.params.userId), parseInt(req.params.id)],
        (err, results) => {
          if (err) throw err;
          if (!results.affectedRows == 0) {
            conn.query(
              `SELECT t.Town_Name,t.Town_Biome,t.Town_Weather,t.Town_Incorporation_Year,t.Town_State 
            FROM town t INNER JOIN user_favorites ON user_favorites.Town_ID=t.Town_ID 
            INNER JOIN user ON user.User_ID= user_favorites.User_ID WHERE user.User_ID= (?);`,
              [parseInt(req.params.userId)],
              (err, results) => {
                if (err) throw err;
                res.json(results);
              }
            );
          } else {
            return res.status(404).send(null);
          }
        }
      );
      conn.commit();
    } catch (err) {
      conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  });
}

function addReview(req, res) {
  // Code
  pool.getConnection((err, conn) => {
    if (err) throw err;
    conn.beginTransaction((err) => {
      if (err) throw err;
    });
    try {
      conn.query(
        `INSERT INTO review (User_ID,Town_ID,Review_Rate,Review_Advising,Review_Safety_Rate) 
        VALUES (?,?,?,?,?)`,
        [
          parseInt(req.params.userId),
          parseInt(req.params.id),
          req.body.Review_Rate,
          req.body.Review_Advising,
          req.body.Review_Safety_Rate,
        ],
        (err) => {
          if (err) throw err;
        }
      );
      conn.query(
        `SELECT * FROM review WHERE User_ID = ?`,
        [parseInt(req.params.userId)],
        (err, results) => {
          if (err) throw err;
          res.json(results);
        }
      );
      conn.commit((err) => {
        if (err) throw err;
      });
    } catch (err) {
      conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  });
}

function getAllReviews(req, res) {
  // Code
  pool.query("SELECT * FROM review", function (err, results) {
    if (err) throw err;
    res.json(results);
  });
}

function getReviewByID(req, res) {
  // Code
  pool.execute(
    "SELECT * FROM review WHERE Review_ID = (?)",
    [req.params.id],
    (err, results) => {
      if (err) throw err;
      res.json(results[0]);
    }
  );
}

function updateOwnReview(req, res, next) {
  // Code
  pool.getConnection((err, conn) => {
    if (err) throw err;
    conn.beginTransaction((err) => {
      if (err) throw err;
    });
    try {
      conn.query(
        `UPDATE review SET Review_Rate = ?,Review_Advising = ?,Review_Safety_Rate = ?
        WHERE Review_ID = ? AND User_ID = ?`,
        [
          req.body.Review_Rate,
          req.body.Review_Advising,
          req.body.Review_Safety_Rate,
          parseInt(req.params.id),
          parseInt(req.params.userId),
        ],
        (err, results) => {
          if (results.changedRows == 0) {
            res.status(404).send(null);
          }
        }
      );
      conn.query(
        `SELECT * FROM review WHERE Review_ID = ? AND User_ID = ?`,
        [parseInt(req.params.id), parseInt(req.params.userId)],
        (err, results) => {
          conn.commit();
          res.json(results);
        }
      );
    } catch (err) {
      conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  });
}

function deleteOwnReview(req, res) {
  // Code
  pool.getConnection((err, conn) => {
    if (err) throw err;
    conn.beginTransaction((err) => {
      if (err) throw err;
    });
    try {
      conn.query(
        `DELETE FROM review WHERE Review_ID = ? AND User_ID = ?`,
        [parseInt(req.params.id), parseInt(req.params.userId)],
        (err, results) => {
          if (!results.affectedRows == 0) {
            conn.query(
              `SELECT * FROM review WHERE User_ID = ?`,
              [parseInt(req.params.userId)],
              (err, results) => {
                if (err) throw err;
                res.json(results);
              }
            );
          } else {
            return res.status(404).send(null);
          }
        }
      );
      conn.commit();
    } catch (err) {
      conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  });
}

function getUserByID(req, res) {
  // Code
  pool.execute(
    `SELECT User_ID,User_Age,User_Gender,User_State,User_Bio,User_Username,User_Photo
    FROM user WHERE User_ID = (?)`,
    [req.params.id],
    (err, results) => {
      if (err) throw err;
      res.json(results[0]);
    }
  );
}

// exportamos las funciones definidas
module.exports = {
  addUser,
  userLogIn,
  getAllTowns,
  getTownByID,
  addTownToFavorites,
  deleteTownFromFavorites,
  addReview,
  getAllReviews,
  getReviewByID,
  deleteOwnReview,
  updateOwnReview,
  getUserByID,
};
