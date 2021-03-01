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
  getUserByID,
  getUserByAttribute,
  getFieldsOfUser,
  deleteUser,
} = require("../controllers/admin");

const prefix = "/:adminId/";

router.get(prefix + "towns/", getAllTowns);
router.get(prefix + "towns/:id", getTownByID);
router.get(prefix + "towns/attribute/:value", getAllTownsByAttribute);
router.get(prefix + "towns/fields/:keys/:id", getFieldsOfTown);
// router.get(prefix + "towns/:id/fields/:keys", getFieldsOfTowns);
router.get(prefix + "reviews/", getAllReviews);
router.get(prefix + "reviews/:id", getReviewsByID);
router.get(prefix + "reviews/attribute/:value", getReviewsByAttribute);
router.get(prefix + "users/", getAllUsers);
router.get(prefix + "users/:id", getUserByID);
router.get(prefix + "users/attribute/:value", getUserByAttribute);
// router.get(prefix + "users/:id/fields/:keys", getFieldsOfUser);
router.post(prefix + "towns/", addTown);
router.delete(prefix + "reviews/:id", deleteReview);
router.delete(prefix + "users/:id", deleteUser);

module.exports = router;
