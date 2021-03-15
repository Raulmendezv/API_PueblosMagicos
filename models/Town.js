// Town.js
/* Clase que representa un Pueblo Mágico */

class Town {
  constructor(
    townID,
    townName,
    townBiome,
    townWeather,
    townIncorporationYear,
    townState,
    townAttractions = [],
    townDishes = [],
    townEthnics = [],
    townFestivities = [],
    townPhotos = [],
    townReviews = []
  ) {
    this.townID = townID;
    this.townName = townName;
    this.townState = townState;
    this.townIncorporationYear = townIncorporationYear;
    this.townAttractions = townAttractions;
    this.townFestivities = townFestivities;
    this.townWeather = townWeather;
    this.townDishes = townDishes;
    this.townBiome = townBiome;
    this.townEthnics = townEthnics;
    this.townPhotos = townPhotos;
    this.townReviews = townReviews;
  }
}

module.exports = Town;
