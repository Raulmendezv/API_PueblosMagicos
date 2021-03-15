const { toMatrix } = require("../helpers");
const Town = require("../models/Town");
const Admin = require("../models/Admin");
const pool = require("../models/index");
const passport = require("passport");

function adminLogIn(req, res, next) {
  if (!req.body.email) {
    return res.status(422).json({ errors: { email: "No puede estar vacio" } });
  }
  if (!req.body.password) {
    return res
      .status(422)
      .json({ errors: { password: "No puede estar vacio" } });
  }

  passport.authenticate(
    "admin-login",
    { session: false },
    (err, admin, info) => {
      if (err) return next(err);
      if (admin) {
        admin.token = admin.generateJWT();
        return res.json({ admin: admin.toAuthAdminJSON() });
      } else {
        return res.status(422).json(info);
      }
    }
  )(req, res, next);
}

function addAdmin(req, res) {
  const pass = req.body.Admin_Password;
  delete req.body.Admin_Password;
  const admin = new Admin(
    req.body.Admin_ID,
    req.body.Admin_Username,
    req.body.Admin_Email,
    req.body.Admin_Password
  );
  admin.createPassword(pass);
  let insertedID;
  pool.getConnection((err, conn) => {
    if (err) throw err;
    conn.beginTransaction((err) => {
      if (err) throw err;
    });
    try {
      conn.query(
        `INSERT INTO admin(Admin_Password,Admin_Username) VALUES (?,?)`,
        [admin.Admin_Password, req.body.Admin_Username],
        (err, results) => {
          if (err) throw err;
          insertedID = results.insertId;
          const adminMails = toMatrix(req.body.Admin_Email, insertedID);
          for (let i = 0; i < adminMails.length; i++) {
            conn.query(
              `INSERT INTO admin_email(Admin_ID,Admin_Email) VALUES (?,?)`,
              adminMails[i],
              (err, results) => {
                if (err) throw err;
              }
            );
          }
          conn.commit((err) => {
            if (err) throw err;
          });

          res.json(admin.toAuthAdminJSON());
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
  pool.execute("SELECT * FROM town", (err, results) => {
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

function addTown(req, res) {
  // Code
  let insertedID;
  pool.getConnection((err, conn) => {
    if (err) throw err;
    conn.beginTransaction((err) => {
      if (err) throw err;
    });
    try {
      conn.query(
        `INSERT INTO town (Town_Name,Town_Biome,Town_Weather,Town_Incorporation_Year,Town_State)
        VALUES (?,?,?,?,?)`,
        [
          req.body.Town_Name,
          req.body.Town_Biome,
          req.body.Town_Weather,
          parseInt(req.body.Town_Incorporation_Year),
          req.body.Town_State,
        ],
        (err, results) => {
          insertedID = results.insertId;
          const townAttractions = toMatrix(
            req.body.Town_Attractions,
            insertedID
          );
          for (let i = 0; i < townAttractions.length; i++) {
            conn.query(
              `INSERT INTO town_attractions (Town_ID,Town_Attraction) VALUES (?,?)`,
              townAttractions[i],
              (err, result) => {
                if (err) throw err;
              }
            );
          }
          const townDishes = toMatrix(req.body.Town_Dishes, insertedID);
          for (let i = 0; i < townDishes.length; i++) {
            conn.query(
              `INSERT INTO town_dishes(Town_ID,Town_Dishes) VALUES (?,?)`,
              townDishes[i],
              (err, results) => {
                if (err) throw err;
              }
            );
          }
          const townEthnics = toMatrix(req.body.Town_Ethnics, insertedID);
          for (let i = 0; i < townEthnics.length; i++) {
            conn.query(
              `INSERT INTO town_ethnics(Town_ID,Town_Ethnics) VALUES (?,?)`,
              townEthnics[i],
              (err, results) => {
                if (err) throw err;
              }
            );
          }
          const townFestivities = toMatrix(
            req.body.Town_Festivities,
            insertedID
          );
          for (let i = 0; i < townFestivities.length; i++) {
            conn.query(
              `INSERT INTO town_festivities(Town_ID,Town_Festivities) VALUES (?,?)`,
              townFestivities[i],
              (err, results) => {
                if (err) throw err;
              }
            );
          }
          const townPhotos = toMatrix(req.body.Town_Photo, insertedID);
          for (let i = 0; i < townPhotos.length; i++) {
            conn.query(
              `INSERT INTO town_photos(Town_ID,Town_Photo) VALUES (?,?)`,
              townPhotos[i],
              (err, results) => {
                if (err) throw err;
              }
            );
          }
          conn.commit();
          res.send(
            new Town(
              insertedID,
              req.body.Town_Name,
              req.body.Town_Biome,
              req.body.Town_Weather,
              req.body.Town_Incorporation_Year,
              req.body.Town_State,
              req.body.Town_Attractions,
              req.body.Town_Dishes,
              req.body.Town_Ethnics,
              req.body.Town_Festivities,
              req.body.Town_Photo,
              []
            )
          );
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

function addTownAttractions(req, res) {
  const townAttractions = toMatrix(
    req.body.Town_Attractions,
    parseInt(req.params.id)
  );
  pool.getConnection((err, conn) => {
    for (let i = 0; i < townAttractions.length; i++) {
      conn.query(
        `INSERT INTO town_attractions (Town_ID,Town_Attraction) VALUES (?,?)`,
        townAttractions[i],
        (err, results) => {
          if (err) throw err;
        }
      );
    }
    conn.query(
      "SELECT * FROM town_attractions WHERE Town_ID = (?)",
      [parseInt(req.params.id)],
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
    conn.release();
  });
}

function addTownDishes(req, res) {
  const townDishes = toMatrix(req.body.Town_Dishes, parseInt(req.params.id));
  pool.getConnection((err, conn) => {
    for (let i = 0; i < townDishes.length; i++) {
      conn.query(
        `INSERT INTO town_dishes (Town_ID,Town_Dishes) VALUES (?,?)`,
        townDishes[i],
        (err, results) => {
          if (err) throw err;
        }
      );
    }
    conn.query(
      "SELECT * FROM town_dishes WHERE Town_ID = (?)",
      [parseInt(req.params.id)],
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
    conn.release();
  });
}

function addTownEthnics(req, res) {
  const townEthnics = toMatrix(req.body.Town_Ethnics, parseInt(req.params.id));

  pool.getConnection((err, conn) => {
    for (let i = 0; i < townEthnics.length; i++) {
      conn.query(
        `INSERT INTO town_ethnics (Town_ID,Town_Ethnics) VALUES (?,?)`,
        townEthnics[i],
        (err, results) => {
          if (err) throw err;
        }
      );
    }
    conn.query(
      "SELECT * FROM town_ethnics WHERE Town_ID = (?)",
      [parseInt(req.params.id)],
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
    conn.release();
  });
}

function addTownFestivities(req, res) {
  const townFestivities = toMatrix(
    req.body.Town_Festivities,
    parseInt(req.params.id)
  );

  pool.getConnection((err, conn) => {
    for (let i = 0; i < townFestivities.length; i++) {
      conn.query(
        `INSERT INTO town_festivities (Town_ID,Town_Festivities) VALUES (?,?)`,
        townFestivities[i],
        (err, results) => {
          if (err) throw err;
        }
      );
    }
    conn.query(
      "SELECT * FROM town_festivities WHERE Town_ID = (?)",
      [parseInt(req.params.id)],
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
    conn.release();
  });
}

function addTownPhotos(req, res) {
  const townPhotos = toMatrix(req.body.Town_Photos, parseInt(req.params.id));

  pool.getConnection((err, conn) => {
    for (let i = 0; i < townPhotos.length; i++) {
      conn.query(
        `INSERT INTO town_photos (Town_ID,Town_Photo) VALUES (?,?)`,
        townPhotos[i],
        (err, results) => {
          if (err) throw err;
        }
      );
    }
    conn.query(
      "SELECT * FROM town_photos WHERE Town_ID = (?)",
      [parseInt(req.params.id)],
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
    conn.release();
  });
}

function updateTown(req, res) {
  // Code
  pool.getConnection((err, conn) => {
    if (err) throw err;
    conn.beginTransaction((err) => {
      if (err) throw err;
    });
    try {
      conn.query(
        `UPDATE town SET Town_Name = ?,Town_Biome = ?,Town_Weather = ?,
      Town_Incorporation_Year = ?,Town_State = ? WHERE Town_ID = ?`,
        [
          req.body.Town_Name,
          req.body.Town_Biome,
          req.body.Town_Weather,
          parseInt(req.body.Town_Incorporation_Year),
          req.body.Town_State,
          req.params.id,
        ],
        (err, results) => {
          if (err) throw err;
          if (!results.affectedRows == 0) {
            conn.query(
              "SELECT * FROM town WHERE Town_ID = (?)",
              [req.params.id],
              (err, results) => {
                if (err) throw err;
                res.json(results[0]);
              }
            );
          } else {
            res.status(404).send(null);
          }
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

function deleteReview(req, res) {
  // Code
  pool.getConnection((err, conn) => {
    if (err) throw err;
    conn.beginTransaction((err) => {
      if (err) throw err;
    });
    try {
      conn.query(
        `DELETE FROM review WHERE Review_ID = ?`,
        [req.params.id],
        (err, results) => {
          if (err) throw err;
          if (!results.affectedRows == 0) {
            conn.query(`SELECT * FROM review`, (err, results) => {
              if (err) throw err;
              res.json(results);
            });
          } else {
            res.status(404).send(null);
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

function getAllUsers(req, res) {
  // Code
  pool.query("SELECT * FROM user", function (err, results) {
    if (err) throw err;
    res.json(results);
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

function deleteUser(req, res) {
  // Code
  pool.getConnection((err, conn) => {
    if (err) throw err;
    conn.beginTransaction((err) => {
      if (err) throw err;
    });
    try {
      conn.query(
        `DELETE FROM user WHERE User_ID = ?`,
        [req.params.id],
        (err, results) => {
          if (err) throw err;
          if (!results.affectedRows == 0) {
            conn.query(`SELECT * FROM user`, (err, results) => {
              if (err) throw err;
              res.json(results);
            });
          } else {
            res.status(404).send(null);
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

// exportamos las funciones definidas
module.exports = {
  adminLogIn,
  addAdmin,
  addTown,
  addTownAttractions,
  addTownDishes,
  addTownEthnics,
  addTownFestivities,
  addTownPhotos,
  getAllTowns,
  getTownByID,
  updateTown,
  getAllReviews,
  getReviewByID,
  deleteReview,
  getAllUsers,
  getUserByID,
  deleteUser,
};
