// Estructura del CRUD
const router = require("express").Router();
const {
  getAllTowns,
  getTownBy,
  addTownToFavorites,
  deleteTownFromFavorites,
  addReview,
  getAllReviews,
  getReviewsBy,
  deleteOwnReview,
  updateOwnReview,
  getUsersBy,
} = require("../controllers/user");

router.get("/", getAllTowns);
// router.post("/", addTown);
// router.put("/:id", updateTown);
// router.delete("/:id", getTownBy);

module.exports = router;
