// Estructura del CRUD
const router = require("express").Router();
const {
  getAllTowns,
  getTownByID,
  getAllTownsByAttribute,
  getFieldsOfTowns,
  addTownToFavorites,
  deleteTownFromFavorites,
  addReview,
  getAllReviews,
  getReviewByID,
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
router.get(prefix + "towns/fields/:keys", getFieldsOfTowns);
router.get(prefix + "reviews/", getAllReviews);
router.get(prefix + "reviews/:id", getReviewByID);
router.get(prefix + "reviews/attribute/:value", getReviewsByAttribute);
router.get(prefix + "users/:id", getUserByID);
router.get(prefix + "users/attribute/:value", getUsersByAttribute);
router.post(prefix + "towns/:id", addTownToFavorites);
router.post(prefix + "reviews/", addReview);
router.put(prefix + "reviews/:id", updateOwnReview);
router.delete(prefix + "towns/:id", deleteTownFromFavorites);
router.delete(prefix + "reviews/:id", deleteOwnReview);

module.exports = router;