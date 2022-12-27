import { connect, connection } from "mongoose"
// importamos moongose nuestro driver par ala base dde datos
// obtenemos una variable de entorno, en la que esta la ruta de la base de datos
const DB_URL = process.env.MDB_URL

// este objeto es par asaber si existe una conexion abierta con la DB
const conn = {
    isConected: false
}
// con esta funcion nos concetamos a la base de datos, es asincronica
export default async function connectDB(){
    // si ya existe conexion entonces no hacemos nada
    if(conn.isConected) return
    //si no nos conectamos
    const db = await connect(DB_URL)
    // si la conexion es exitosa nos devuelve 1 lo cual es true en booleano
    conn.isConected = db.connections[0].readyState

    console.log(db.connection.db.databaseName)
}
// si la conexion se hizo entonces lo imprimimos en consola del servidor
connection.on("connected", _ => {
    console.log("Mongo is ready")
})
// si la conexion falla mostramos el error
connection.on("error", err => {
    console.log(err)
})