// Estructura del CRUD
const router = require("express").Router();
const {
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
  addUser,
  userLogIn,
} = require("../controllers/user");
const auth = require("./auth");

const prefix = "/:userId/";

router.get(prefix + "towns/", auth.required, getAllTowns);
router.get(prefix + "towns/:id", auth.required, getTownByID);
router.get(prefix + "reviews/", auth.required, getAllReviews);
router.get(prefix + "reviews/:id", auth.required, getReviewByID);
router.get(prefix + "users/:id", auth.required, getUserByID);
router.post("/", addUser);
router.post("/login", userLogIn);
router.post(prefix + "towns/:id", auth.required, addTownToFavorites);
router.post(prefix + "towns/:id/reviews/", auth.required, addReview);
router.put(prefix + "reviews/:id", auth.required, updateOwnReview);
router.delete(prefix + "towns/:id", auth.required, deleteTownFromFavorites);
router.delete(prefix + "reviews/:id", auth.required, deleteOwnReview);

module.exports = router;
