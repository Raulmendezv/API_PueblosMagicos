// Review.js
/* Clase que representa una Reseña */
class Review {
  #reviewCreationDate;
  constructor(reviewID, reviewRate, reviewAdvising, reviewSafety) {
    this.reviewID = reviewID;
    this.reviewRate = reviewRate;
    this.reviewAdvising = reviewAdvising;
    this.reviewSafety = reviewSafety;
    this.#reviewCreationDate = new Date(Date.now()).toDateString();
  }
}

module.exports = Review;
