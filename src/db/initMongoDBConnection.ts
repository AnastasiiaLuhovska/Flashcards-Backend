import getEnvVar from "../utils/getEnvVar.js";
import * as mongoose from "mongoose";

const initMongoDBConnection = async() => {
    try{
        const user = getEnvVar('MONGODB_USER')
        const password = getEnvVar('MONGODB_PASSWORD')
        const url = getEnvVar('MONGODB_URL')
        const name = getEnvVar('MONGODB')

        await mongoose.connect(`mongodb+srv://${user}:${password}@${url}/${name}?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('DB is successfully connected')
    }catch(e){
        console.log('Error while setting up mongo connection', e)
        throw e
    }
};

export default initMongoDBConnection;