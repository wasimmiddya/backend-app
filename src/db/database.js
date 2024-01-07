import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const conHost = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n 🍃MongoDB successfully connected!!!  ||  DB HOST:${conHost.connection.host}`);
    } catch (error) {
        console.error("❌MongoDB Connection Error :: ",error);
        process.exit();
    }
}

export default connectDB