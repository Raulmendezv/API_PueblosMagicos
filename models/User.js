// User.js
/* Clase que representa un Usuario */

class User {
  constructor(
    userID,
    userName,
    userEmail,
    userPassword,
    userAge,
    userAboutMe,
    userState,
    userGender,
    userReviews = [],
    userFavorites = []
  ) {
    this.userID = userID;
    this.userName = userName;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
    this.userAge = userAge;
    this.userAboutMe = userAboutMe;
    this.userState = userState;
    this.userGender = userGender;
    this.userReviews = userReviews;
    this.userFavorites = userFavorites;
  }
}

module.exports = User;
