// Review.js
/* Clase que representa una Reseña */

class Review {
    constructor(reviewID, reviewRate, reviewAdvising, reviewSafety) {
        this.reviewID = reviewID;
        this.reviewRate = reviewRate;
        this.reviewAdvising = reviewAdvising;
        this.reviewSafety = reviewSafety;
    }
}

module.exports = Review;