// Town.js
/* Clase que representa un Pueblo Mágico */

class Town {
  constructor(
    townID,
    townName,
    townLocation,
    townSince,
    townAttractions = [],
    townCharacteristics,
    townFestivities = [],
    townWeather,
    townDishes = [],
    townZone,
    townEthnics = [],
    townReviews = []
  ) {
    this.townID = townID;
    this.townName = townName;
    this.townLocation = townLocation;
    this.townSince = townSince;
    this.townAttractions = townAttractions;
    this.townCharacteristics = townCharacteristics;
    this.townFestivities = townFestivities;
    this.townWeather = townWeather;
    this.townDishes = townDishes;
    this.townZone = townZone;
    this.townEthnics = townEthnics;
    this.townReviews = townReviews;
  }
}

module.exports = Town;
