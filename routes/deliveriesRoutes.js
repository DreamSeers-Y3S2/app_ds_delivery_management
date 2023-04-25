const express = require("express");
const {
	createDelivery,
	getDeliveriesForEachOrder,
	getDeliveryById,
	updateDelivery,
} = require("../controllers/deliveriesController");

const router = express.Router();

router.route("/customer/delivery/create").post(createDelivery);
router.route("/order/delivery/get/:id").get(getDeliveriesForEachOrder);

router.route("/customer/delivery/get/:id").get(getDeliveryById).put(updateDelivery);

module.exports = router;
