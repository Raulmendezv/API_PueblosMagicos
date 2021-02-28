const Admin = require("./models/Admin"),
  User = require("./models/User"),
  Review = require("./models/Review"),
  Town = require("./models/Town");

const dummiesAdmins = [
  new Admin(1, "sebastian", "hola#dev.com", "12"),
  new Admin(2, "raul", "ke#dev.com", "123"),
  new Admin(3, "herminia", "a#dev.com", "1234"),
  new Admin(4, "christian", "c#dev.com", "12345"),
];

const dummiesReviews = [
  new Review(1, "4", "Ir al Mirador y comer la Comida 2", "3"),
  new Review(2, "1", "Lugar muy vacio", "4"),
  new Review(3, "5", "Lleno de bosques y zonas verdes", "5"),
  new Review(4, "5", "Visitar los centros historicos y artisticos", "3"),
];

const dummiesTowns = [
  new Town(
    1,
    "Aculco",
    "Estado de Mexico",
    "03/08/2019",
    ["Balneario municipal", "Casa de Cultura", "Casa Hidalgo"],
    "blah blah",
    ["La fundación", "Día de la Fraternidad"],
    "Fresco",
    ["Enchiladas Aculquenses"],
    "Bosque",
    ["Otomies"],
    [dummiesReviews[2]]
  ),
  new Town(
    2,
    "Ajijic",
    "Jalisco",
    "08/12/2020",
    ["Malecón de Ajijic", "Kiosko ", "Parque central"],
    "blah blah",
    ["Fest 1", "Fest 2"],
    "Caluroso",
    ["Comida 1"],
    "Bosque",
    ["Mayas"],
    [dummiesReviews[1]]
  ),
  new Town(
    3,
    "Lagos de Moreno",
    "Jalisco",
    "03/08/2019",
    [
      "Balneario El Paraíso",
      "Casa de la Cultura",
      "Cabalgatas a las Haciendas",
    ],
    "blah blah",
    ["Fiestas de los Arcos", "Fiestas en honor de San Hermión"],
    "Caluroso",
    ["Comida 1", "Comida 2"],
    "Desierto",
    ["Raramuris"],
    [dummiesReviews[0], dummiesReviews[3]]
  ),
  new Town(
    4,
    "Álamos",
    "Sonora",
    "14/08/2019",
    [
      "Antigua Hacienda de los Santos",
      "Callejón del Beso",
      "Casa de la Cultura",
    ],
    "blah blah",
    [
      "Festival Internacional Dr. Alfonso Ortiz Tirado",
      "Fiestas de la Purísima Concepción",
    ],
    "Caluroso",
    ["Comida 1, Comida 2", "Comida 3"],
    "Playa",
    ["Raramuris"],
    []
  ),
];

const dummiesUsers = [
  new User(
    1,
    "Grufty295",
    "asdas@ppp.com",
    "ab",
    20,
    "dummies user 1",
    "Chihuahua",
    "Masculino",
    [dummiesReviews[0]],
    [dummiesTowns[0], dummiesTowns[2]]
  ),
  new User(
    2,
    "Jupera",
    "osdos@ppp.com",
    "abc",
    21,
    "dummies user 2",
    "Chihuahua",
    "Masculino",
    [dummiesReviews[3]],
    []
  ),
  new User(
    3,
    "Liuchota",
    "esdes@ppp.com",
    "abcd",
    22,
    "dummies user 3",
    "Texas",
    "Masculino",
    [dummiesReviews[1], dummiesReviews[2]],
    [dummiesTowns[0], dummiesTowns[1], dummiesTowns[2], dummiesTowns[3]]
  ),
  new User(
    4,
    "Chuy",
    "isdis@ppp.com",
    "abcd",
    23,
    "dummies user 4",
    "Chihuahua",
    "Masculino",
    [],
    []
  ),
];

module.exports = {
  dummiesAdmins,
  dummiesReviews,
  dummiesTowns,
  dummiesUsers,
};
