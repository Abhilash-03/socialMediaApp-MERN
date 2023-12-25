import mongoose from "mongoose";

const connectDB = async (url) => {
    await mongoose.connect(url)
    .then(() => console.log("MongoDB is connected!!!"))
    .catch(err => console.log(`${err} not connected!!`));

}

export { connectDB }