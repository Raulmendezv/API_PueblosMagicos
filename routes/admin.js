// Estructura del CRUD
const router = require("express").Router();
const {
  addTown,
  getAllTowns,
  getAllTownsByAttribute,
  getFieldsOfTown,
  getTownByID,
  updateTown,
  getAllReviews,
  getReviewsBy,
  deleteReview,
  getAllUsers,
  getUserBy,
  deleteUser,
} = require("../controllers/admin");

const prefix = "/:adminId/";

router.get(prefix + "town/", getAllTowns);
router.get(prefix + "town/:id", getTownByID);
router.get(prefix + "town/attribute/:value", getAllTownsByAttribute);
router.get(prefix + "town/fields/:keys/:id", getFieldsOfTown);
// router.get(prefix + "town/:id/fields/:keys", getFieldsOfTown);
router.post(prefix + "town/", addTown);

module.exports = router;
