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
  console.log(keys);
}

function updateTown() {
  // Code
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
  const removedItem = dummyData.dummiesReviews.findIndex((review) => {
    return Object.values(review).includes(parseInt(req.params.id));
  });
  if (removedItem == -1) {
    res.sendStatus(404);
  } else {
    dummyData.dummiesReviews.splice(removedItem, 1);
    res.status(200).send(dummyData.dummiesReviews);
  }
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
}

function deleteUser(req, res) {
  // Code
  const removedItem = dummyData.dummiesUsers.findIndex((user) => {
    return Object.values(user).includes(parseInt(req.params.id));
  });
  if (removedItem == -1) {
    res.sendStatus(404);
  } else {
    dummyData.dummiesUsers.splice(removedItem, 1);
    res.status(200).send(dummyData.dummiesUsers);
  }
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
