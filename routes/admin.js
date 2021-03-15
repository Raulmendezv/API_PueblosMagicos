// Estructura del CRUD
const router = require("express").Router();
const {
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
} = require("../controllers/admin");
const auth = require("./auth");

const prefix = "/:adminId/";

router.get(prefix + "towns", auth.required, getAllTowns);
router.get(prefix + "towns/:id", auth.required, getTownByID);
router.get(prefix + "reviews", auth.required, getAllReviews);
router.get(prefix + "reviews/:id", auth.required, getReviewByID);
router.get(prefix + "users", auth.required, getAllUsers);
router.get(prefix + "users/:id", auth.required, getUserByID);
router.post("/", addAdmin);
router.post("/login", adminLogIn);
router.post(prefix + "towns", auth.required, addTown);
router.post(
  prefix + "towns/:id/attractions",
  auth.required,
  addTownAttractions
);
router.post(prefix + "towns/:id/dishes", auth.required, addTownDishes);
router.post(prefix + "towns/:id/ethnics", auth.required, addTownEthnics);
router.post(
  prefix + "towns/:id/festivities",
  auth.required,
  addTownFestivities
);
router.post(prefix + "towns/:id/photos", auth.required, addTownPhotos);
router.put(prefix + "towns/:id", auth.required, updateTown);
router.delete(prefix + "reviews/:id", auth.required, deleteReview);
router.delete(prefix + "users/:id", auth.required, deleteUser);

module.exports = router;
