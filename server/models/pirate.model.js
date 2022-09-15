const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			minlength: [2, "Name must be at least 2 characters long"]
		},
		imgUrl: {
			type: String,
			// default: "https://tinyurl.com/4v38j37p",
			required: [true, "ImgUrl is required"],
		},
		crewPosition: {
				type: String,
				required: [true, "Crew Position is required"],
				minlength: [1, "Crew Position must be at least 1 characters long"]
		},
		treasure: {
			type: Number,
			required: [true, "Treasure is required"],
		},
		piratePhrase: {
			type: String,
			required: [true, "PiratePhrase is required"],
			minlength: [2, "PiratePhrase must be at least 2 characters long"]
		},
			
			pegLeg: { 
				type: String,
				// required: [true, "Peg Leg is required"],
			},

			eyePatch: { 
				type: String,
				// required: [true, "Eye patch is required"],
			
			},

			hookHand: { 
				type: String,
				// required: [true, "Hook Hand is required"],
			
			},
},
	{ timestamps: true }
);

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;