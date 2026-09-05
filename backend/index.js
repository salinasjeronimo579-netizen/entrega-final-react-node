import { conn } from "./src/config/database.js";
import express from 'express';
import cors from 'cors';
import "./src/models/index.js"
import { router } from "./src/routes/Routes.js";


const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

const PORT = 3000;
const SERVER = "http://localhost:"
const URL = SERVER + PORT

app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto: " + PORT)
})

conn.authenticate()
    .then(() => {
        return conn.sync({alter:true})
    })
    .then(()=>{
        console.log("Conexión nitida en la dirección: " + URL)
    })
    
    .catch((error) => {
        console.log("Conexión fallida " + (error))
    })



