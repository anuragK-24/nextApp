import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    //To ignorre the typ of connection, here '!' is used
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on('error',()=>{
      console.log('mongodb connection error')
      process.exit();
    })
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
}
