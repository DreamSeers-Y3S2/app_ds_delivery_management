const mongoose = require("mongoose");

const deliverySchema = mongoose.Schema({
	order: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Order",
	},
	customerName: {
		type: String,
		required: true,
	},
	customerEmail: {
		type: String,
		required: true,
	},
	customerPhone: {
		type: String,
		required: true,
	},
	deliveryServiceName: {
		type: String,
		required: true,
	},

	deliveryServicePhone: {
		type: String,
		required: true,
	},

	status: {
		type: String,
		required: true,
	},
});

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;
