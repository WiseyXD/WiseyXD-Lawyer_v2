import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Lawyer from "../models/LawyerSchema.js"; // Import Lawyer model

export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updateUser = await User.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updateUser,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" });
    }
};

export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);
        res.status(200).json({
            success: true,
            message: "user found",
            data: user,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "no user found" });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}).select("-password");

        res.status(200).json({
            success: true,
            message: "users found",
            data: users,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "not found" });
    }
};

export const getUserProfile = async (req, res) => {
    const userId = req.userId;
    console.log(userId);
    try {
        const user = await User.findById(userId);

        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "user not found" });
        }
        const { password, ...rest } = user._doc;

        res.status(200).json({
            success: true,
            message: "Profile info is getting",
            data: { ...rest },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong,cannot get",
        });
    }
};

export const getMyAppointments = async (req, res) => {
    try {
        // step 1: retrieve appointments from booking for specific user
        const bookings = await Booking.find({ user: req.userId });
console.log(bookings)
        // step 2: extract lawyer id from appointment booking
        const lawyerIds = bookings.map((el) => el.Lawyer);

        // step 3: retrieve lawyers using lawyer ids
        const lawyers = await Lawyer.find({ _id: { $in: lawyerIds } }).select(
            "-password"
        );

        res.status(200).json({
            success: true,
            message: "Appointments are getting",
            data: lawyers,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "not found" });
    }
};
