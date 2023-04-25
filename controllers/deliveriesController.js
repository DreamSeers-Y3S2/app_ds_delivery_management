const Delivery = require("../models/deliveriesModel");
const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");

const createDelivery = asyncHandler(async (req, res) => {
	const {
		order,
		customerName,
		customerEmail,
		customerPhone,
		deliveryServiceName,
		deliveryServiceEmail,
		deliveryServicePhone,
		status,
	} = req.body;

	const orders = await Order.findOne({ _id: order });

	if (
		!order ||
		!customerName ||
		!customerEmail ||
		!customerPhone ||
		!deliveryServiceName ||
		!deliveryServiceEmail ||
		!deliveryServicePhone ||
		!status
	) {
		res.status(400);
		throw new Error("Please Fill all the fields");
	} else {
		const delivery = new Delivery({
			order,
			customerName,
			customerEmail,
			customerPhone,
			deliveryServiceName,
			deliveryServiceEmail,
			deliveryServicePhone,
			status,
		});

		const createDelivery = await delivery.save();

		res.status(201).json(createDelivery);
		console.log(req.body);
	}
});

const getDeliveriesForEachOrder = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);
	const delivery = await Delivery.find({ order: order._id });
	res.json(delivery);
});

const getDeliveryById = asyncHandler(async (req, res) => {
	const delivery = await Delivery.findById(req.params.id);
	console.log(delivery);
	if (delivery) {
		res.json(delivery);
	} else {
		res.status(404).json({ message: "Delivery not found" });
	}
});

const updateDelivery = asyncHandler(async (req, res) => {
	const {
		customerName,
		customerEmail,
		customerPhone,
		deliveryServiceName,
		deliveryServiceEmail,
		deliveryServicePhone,
		status,
	} = req.body;

	const delivery = await Delivery.findById(req.params.id);
	if (delivery) {
		delivery.customerName = customerName;
		delivery.customerEmail = customerEmail;
		delivery.customerPhone = customerPhone;
		delivery.deliveryServiceName = deliveryServiceName;
		delivery.deliveryServiceEmail = deliveryServiceEmail;
		delivery.deliveryServicePhone = deliveryServicePhone;
		delivery.status = status;

		console.log(delivery);

		const updatedDelivery = await delivery.save();
		res.json(updatedDelivery);
	} else {
		res.status(404);
		throw new Error("Delivery not found");
	}
});

module.exports = {
	createDelivery,
	getDeliveriesForEachOrder,
	getDeliveryById,
	updateDelivery,
};
