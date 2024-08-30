import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://sanjeedofficial22:7902501645@cluster0.razip.mongodb.net/smartbank").then(() => {
        console.log("DB connected");
    })
}

export default connectDB