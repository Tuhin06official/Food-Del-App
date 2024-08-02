import mongoose from "mongoose";


 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tuhin06official:6289668734@cluster0.nof16cw.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}