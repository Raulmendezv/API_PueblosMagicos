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
  getReviewsByID,
  getReviewsByAttribute,
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
router.get(prefix + "reviews/", getAllReviews);
router.get(prefix + "reviews/:id", getReviewsByID);
router.get(prefix + "reviews/attribute/:value", getReviewsByAttribute);
router.post(prefix + "town/", addTown);
router.delete(prefix + "reviews/:id", deleteReview);

module.exports = router;
