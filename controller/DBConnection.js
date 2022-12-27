import { connect, connection } from "mongoose"

const DB_URL = process.env.MDB_URL

const conn = {
    isConected: false
}

export default async function connectDB(){
    if(conn.isConected) return

    const db = await connect(DB_URL)
    conn.isConected = db.connections[0].readyState

    console.log(db.connection.db.databaseName)
}
connection.on("connected", _ => {
    console.log("Mongo is ready")
})
connection.on("error", err => {
    console.log(err)
})