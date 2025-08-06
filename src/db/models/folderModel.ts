import mongoose, {Schema} from "mongoose";

const foldersSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const FoldersModel = mongoose.model('Folder', foldersSchema)

export default FoldersModel