import mongoose from "mongoose";

const uri = 'mongodb+srv://okkyAdnsyh:okkyadnsyh123@xt-billiard.rs8gxbj.mongodb.net/?retryWrites=true&w=majority&appName=xt-billiard'
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export async function connect() {
    try{
        await mongoose.connect(uri);
    }catch(err){
        console.log(err);
    }
}