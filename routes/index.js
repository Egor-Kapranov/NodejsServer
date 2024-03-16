const Router = require("express");
const router = new Router();
//const eventhandler = require("../mongod/eventhandler");
//const errorhandler = require("../mongod/errorhandler");

const userRouter = require("./userRouter");
const reviewRouter = require("./reviewRouter");
const restaurantRouter = require("./restaurantRouter");
const tableRouter = require("./tableRouter");
const reservationRouter = require("./reservationRouter");

//router.use(eventhandler);
router.use("/user", userRouter);
router.use("/review", reviewRouter);
router.use("/restaurant", restaurantRouter);
router.use("/table", tableRouter);
router.use("/reservation", reservationRouter);
//router.use(errorhandler);

module.exports = router;
