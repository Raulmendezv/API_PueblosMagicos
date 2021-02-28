// Estructura del CRUD
const router = require("express").Router();
const {
  getAllTowns,
  getTownByID,
  getAllTownsByAttribute,
  getFieldsOfTown,
  addTownToFavorites,
  deleteTownFromFavorites,
  addReview,
  getAllReviews,
  getReviewsByID,
  getReviewsByAttribute,
  deleteOwnReview,
  updateOwnReview,
  getUserByID,
  getUsersByAttribute,
} = require("../controllers/user");

const prefix = "/:userId/";

router.get(prefix + "towns/", getAllTowns);
router.get(prefix + "towns/:id", getTownByID);
router.get(prefix + "towns/attribute/:value", getAllTownsByAttribute);
router.get(prefix + "towns/fields/:keys/:id", getFieldsOfTown);
router.get(prefix + "reviews/", getAllReviews);
router.get(prefix + "reviews/:id", getReviewsByID);
router.get(prefix + "reviews/attribute/:value", getReviewsByAttribute);
router.get(prefix + "users/:id", getUserByID);
router.get(prefix + "users/attribute/:value", getUsersByAttribute);
router.post(prefix + "towns/:id", addTownToFavorites);
router.delete(prefix + "towns/:id", deleteTownFromFavorites);
// router.get(prefix + "users/:id/fields/:keys", getFieldsOfUser);
// router.delete(prefix + "users/:id", deleteUser);

module.exports = router;
