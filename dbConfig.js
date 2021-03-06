import mongoose from 'mongoose'

//database connection
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {})
    console.log(
      `MongoDB connected:  ${conn.connection.host} && ${process.env.MONGODB_URI}`
    )
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`)
    process.exit(1)
  }
}
