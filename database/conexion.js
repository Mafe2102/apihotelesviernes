import mongoose from 'mongoose'
export async function establecerConexion(){
    try{
        await mongoose.connect("mongodb+srv://MariaVillada:Admin123@cluster0.1f3udbm.mongodb.net/test")
        console.log("Conexion exitosa")
    }catch(error){
        console.log("Conexion fallo"+error)
    }
}