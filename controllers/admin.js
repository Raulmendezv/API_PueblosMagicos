const dummyData = require("../dummyData");

function addTown(req, res) {
  // Code
  res.status(201).send(req.body);
}

function getAllTowns(req, res) {
  // Code
  res.status(200).send(dummyData.dummiesTowns);
}

function getTownByID(req, res) {
  // Code
  console.log(req.params);
  res.status(200).send(dummyData.dummiesTowns[req.params.id - 1]);
}

function getAllTownsByAttribute(req, res) {
  res.send(
    dummyData.dummiesTowns.filter((town) => {
      return Object.values(town).includes(req.params.value) ? town : false;
    })
  );
}

function getFieldsOfTown(req, res) {
  // Code
  const keys = req.params.keys.split(",");
  keys.unshift("townID", "townName");
  const towns = dummyData.dummiesTowns;

  const reducedTowns = reduceObject(towns, keys);

  res.send(reducedTowns);
}

function updateTown() {
  // Code
  const indexOfItemToBeSearched = searchIndex(
    dummyData.dummiesTowns,
    req.params.id
  );
  const itemToBeSearched = dummyData.dummiesTowns[indexOfItemToBeSearched];
  const updatedTown = { ...itemToBeSearched, ...req.body };
  res.send(updatedTown);
}

function getAllReviews(req, res) {
  // Code
  res.status(200).send(dummyData.dummiesReviews);
}

function getReviewsByID(req, res) {
  // Code
  res.status(200).send(dummyData.dummiesReviews[req.params.id - 1]);
}

function getReviewsByAttribute(req, res) {
  // Code
  res.send(
    dummyData.dummiesReviews.filter((review) => {
      return Object.values(review).includes(req.params.value) ? review : false;
    })
  );
}

function deleteReview(req, res) {
  // Code
  const indexOfItemToBeRemoved = searchIndex(
    dummyData.dummiesReviews,
    req.params.id
  );

  evaluateIndex(
    res,
    indexOfItemToBeRemoved,
    dummyData.dummiesReviews.splice(indexOfItemToBeRemoved, 1),
    dummyData.dummiesReviews
  );
}

function getAllUsers(req, res) {
  // Code
  res.status(200).send(dummyData.dummiesUsers);
}

function getUserByID(req, res) {
  // Code
  res.status(200).send(dummyData.dummiesUsers[req.params.id - 1]);
}

function getUserByAttribute(req, res) {
  //Code
  res.send(
    dummyData.dummiesUsers.filter((user) => {
      return Object.values(user).includes(req.params.value) ? user : false;
    })
  );
}

function getFieldsOfUser() {
  //Code
  const keys = req.params.keys.split(",");
  keys.unshift("userID", "userName");
  const users = dummyData.dummiesUsers;

  const reducedUsers = reduceObject(users, keys);
  res.send(reducedUsers);
}

function deleteUser(req, res) {
  // Code
  const indexOfItemToBeRemoved = searchIndex(
    dummyData.dummiesUsers,
    req.params.id
  );

  evaluateIndex(
    res,
    indexOfItemToBeRemoved,
    dummyData.dummiesUsers.splice(indexOfItemToBeRemoved, 1),
    dummyData.dummiesUsers
  );
}

// exportamos las funciones definidas
module.exports = {
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
};
