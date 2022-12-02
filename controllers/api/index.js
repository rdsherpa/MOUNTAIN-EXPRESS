const router = require("express").Router();
const carRoutes = require("./car-routes");
const tripRoutes = require("./trip-routes");
const userRoutes = require("./user-routes");

router.use("/cars", carRoutes);
router.use("/trips", tripRoutes);
router.use("/users", userRoutes);

module.exports = router;
