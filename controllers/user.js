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

function getFieldsOfTowns(req, res) {
  // Code
  const keys = req.params.keys.split(",");
  keys.unshift("townID", "townName");
  const towns = dummyData.dummiesTowns;

  const reducedTowns = reduceObject(towns, keys);

  res.send(reducedTowns);
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
  res.status(201).send(req.body);
}

function getAllReviews(req, res) {
  // Code
  res.status(200).send(dummyData.dummiesReviews);
}

function getReviewByID(req, res) {
  // Code
  const indexOfItemToBeSearched = searchIndex(
    dummyData.dummiesReviews,
    req.params.id
  );
  const itemToBeSearched = dummyData.dummiesReviews[indexOfItemToBeSearched];
  evaluateIndex(res, indexOfItemToBeSearched, "", itemToBeSearched);
}

function getReviewsByAttribute(req, res) {
  // Code
  res.send(
    dummyData.dummiesReviews.filter((review) => {
      return Object.values(review).includes(req.params.value) ? review : false;
    })
  );
}

function updateOwnReview(req, res) {
  // Code
  const currentUser = dummyData.dummiesUsers[req.params.userId - 1];
  const indexOfItemToBeUpdated = searchIndex(
    currentUser.userReviews,
    req.params.id
  );
  const itemToBeUpdated = currentUser.userReviews[indexOfItemToBeUpdated];
  const updatedReview = { ...itemToBeUpdated, ...req.body };
  res.send(updatedReview);
}

function deleteOwnReview(req, res) {
  // Code
  const currentUser = dummyData.dummiesUsers[req.params.userId - 1];
  const indexOfItemToBeRemoved = searchIndex(
    currentUser.userReviews,
    req.params.id
  );

  evaluateIndex(
    res,
    indexOfItemToBeRemoved,
    currentUser.userReviews.splice(indexOfItemToBeRemoved, 1),
    currentUser.userReviews
  );
}

function getUserByID(req, res) {
  // Code
  const indexOfItemToBeSearched = searchIndex(
    dummyData.dummiesUsers,
    req.params.id
  );
  const itemToBeSearched = dummyData.dummiesUsers[indexOfItemToBeSearched];
  evaluateIndex(res, indexOfItemToBeSearched, "", itemToBeSearched);
}

function getUsersByAttribute(req, res) {
  // Code
  res.send(
    dummyData.dummiesUsers.filter((user) => {
      return Object.values(user).includes(req.params.value) ? town : false;
    })
  );
}

// exportamos las funciones definidas
module.exports = {
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
};
