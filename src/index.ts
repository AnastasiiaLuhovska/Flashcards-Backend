import startServer from "./server.js";
import initMongoDBConnection from "./db/initMongoDBConnection.js";
import dotenv from "dotenv";

const bootstrap = async() =>{
    dotenv.config();
    try{
        await initMongoDBConnection()
        startServer()

    }catch(e){
        console.log(e)
    }
}

bootstrap()