const express = require("express");
const {
	createDelivery,
	getDeliveriesForEachCustomer,
	getDeliveries,
	getDeliveryById,
	updateDelivery,
} = require("../controllers/deliveriesController");

const router = express.Router();

router.route("/create").post(createDelivery);
router.route("/all").get(getDeliveries);
router.route("/customer/all/:id").get(getDeliveriesForEachCustomer);
router.route("/get/:id").get(getDeliveryById).put(updateDelivery);

module.exports = router;
