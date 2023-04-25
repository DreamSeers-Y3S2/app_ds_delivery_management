const express = require("express");
const {
	createDelivery,
	getDeliveriesForEachOrder,
	getDeliveryById,
	updateDelivery,
} = require("../controllers/deliveriesController");

const router = express.Router();

router.route("/create").post(createDelivery);
router.route("/order/get/:id").get(getDeliveriesForEachOrder);
router.route("/").get(getDeliveries);
router.route("/get/:id").get(getDeliveryById).put(updateDelivery);

module.exports = router;
