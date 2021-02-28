const dummyData = require("../dummyData");
const { searchIndex, evaluateIndex } = require("../helpers");

function getAllTowns() {
  // Code
  res.status(200).send(dummyData.dummiesTowns);
}

function getTownByID(req, res) {
  // Code
  const indexOfItemToBeSearched = searchIndex(
    dummyData.dummiesTowns,
    req.params.id
  );
  const itemToBeSearched = dummyData.dummiesTowns[indexOfItemToBeSearched];
  evaluateIndex(res, indexOfItemToBeSearched, "", itemToBeSearched);

  // res.status(200).send(dummyData.dummiesTowns[req.params.id - 1]);
}

function getAllTownsByAttribute(req, res) {
  // Code
  res.send(
    dummyData.dummiesTowns.filter((town) => {
      return Object.values(town).includes(req.params.value) ? town : false;
    })
  );
}

function getFieldsOfTown(req, res) {
  // Code
  const keys = req.params.keys.split(",");
  console.log(keys);
}

function addTownToFavorites(req, res) {
  // Code
  const currentUser = dummyData.dummiesUsers[req.params.userId - 1];
  const indexOfItemToBeAdded = searchIndex(
    dummyData.dummiesTowns,
    req.params.id
  );

  const itemToBeAdded = dummyData.dummiesTowns[indexOfItemToBeAdded];

  if (!Object.values(currentUser.userFavorites).includes(itemToBeAdded)) {
    evaluateIndex(
      res,
      indexOfItemToBeAdded,
      currentUser.userFavorites.push(itemToBeAdded),
      currentUser.userFavorites
    );
  } else {
    res.send("Ya se encuentra en la Lista de Favoritos");
  }
}

function deleteTownFromFavorites(req, res) {
  // Code
  const currentUser = dummyData.dummiesUsers[req.params.userId - 1];
  const indexOfItemToBeRemoved = searchIndex(
    currentUser.userFavorites,
    req.params.id
  );

  evaluateIndex(
    res,
    indexOfItemToBeRemoved,
    currentUser.userFavorites.splice(indexOfItemToBeRemoved, 1),
    currentUser.userFavorites
  );
}

function addReview(req, res) {
  // Code
}

function getAllReviews(req, res) {
  // Code
}

function getReviewsByID(req, res) {
  // Code
}

function getReviewsByAttribute(req, res) {
  // Code
}

function updateOwnReview(req, res) {
  // Code
}

function deleteOwnReview(req, res) {
  // Code
}

function getUserByID(req, res) {
  // Code
}

function getUsersByAttribute(req, res) {
  // Code
}

// exportamos las funciones definidas
module.exports = {
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
};
