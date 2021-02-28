// importamos las dependencias necesarias
var router = require("express").Router();

// definimos el comportamiento en la raíz del endpoint
router.get("/", (req, res) => {
  res.send("welcome to Pueblos Magicos api");
});

// exportamos nuestro nuevo router
module.exports = router;

router.use("/user/", require("./user"));
router.use("/admin/", require("./admin"));

/* con el método use de nuestro router estamos indicando
 * que en la ruta 'v1/usuarios' estarán anidadas las rutas
 * que vamos a crear en nuestro archivo usuarios.js,
 * la función require está importando este archivo */

module.exports = router;
