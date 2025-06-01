import mongoose, { connection } from "mongoose"

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}
async function connectDb() {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        }
        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/rootify`, opts).then(mongoose => { return mongoose })
    }
    cached.conn = await cached.promise
    return mongoose
}

export default connectDb