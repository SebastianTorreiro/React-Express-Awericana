const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const fakeRouter = require("../Helpers/fakeGenerator");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/fake", fakeRouter);

const productsRoute = require("./producto");
const publicaciones = require("./publicaciones");
const carrito = require("./carrito");
const rutaBaseDeDatos = require("./routeCargaBaseDeDatos");
const categoria = require("./categoria");
const authRouter = require("./auth");
const favoritos = require("./favoritos");
const authTerceros = require("./authTerceros.js");
const usuario = require("./usuario");
const pagos = require("./pagosRoutes");
const busquedas = require("./busquedas");
const posventa = require("./posventa");

router.use("/producto", productsRoute);
router.use("/auth", authRouter);
router.use("/publicaciones", publicaciones);
router.use("/carrito", carrito);
router.use("/cargaBaseDeDatos", rutaBaseDeDatos);
router.use("/categoria", categoria);
router.use("/favoritos", favoritos);
router.use("/auth", authTerceros);
router.use("/pagos", pagos);
router.use("/busqueda", busquedas);
router.use("/posventa", posventa);
router.use("/usuario", usuario);

module.exports = router;
