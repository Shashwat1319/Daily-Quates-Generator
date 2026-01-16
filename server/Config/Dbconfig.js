import mongoose from "mongoose";
const DbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongo db is Connected !!")
    } catch (error) {
        console.log("Mongo DB is Not Connected !1")
    }
}

export default DbConnect