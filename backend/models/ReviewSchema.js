import mongoose from "mongoose";
import lawyer from "./LawyerSchema.js";

const reviewSchema = new mongoose.Schema(
    {
        Lawyer: {
            type: mongoose.Types.ObjectId,
            ref: "Lawyer",
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        reviewText: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
            default: 0,
        },
    },
    { timestamps: true }
);

reviewSchema.pre(/^find/, function (next) {
    this.populate({
        path: "user",
        select: "name photo",
    });

    next();
});

reviewSchema.statics.calcAverageRatings = async function (lawyerId) {
    const stats = await this.aggregate([
        {
            $match: { lawyer: lawyerId },
        },
        {
            $group: {
                _id: "lawyer",
                numOfRating: { $sum: 1 },
                avgRating: { $avg: "$rating" },
            },
        },
    ]);
    console.log(stats);

    const nalla = await lawyer.findByIdAndUpdate(lawyerId, {
        totalRating: stats[0].numOfRating,
        avgRating: stats[0].avgRating,
    });
    console.log(nalla);
};

reviewSchema.post("save", function () {
    this.constructor.calcAverageRatings(this.lawyer);
});

export default mongoose.model("Review", reviewSchema);
