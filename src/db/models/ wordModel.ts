import mongoose, {Schema} from "mongoose";

const wordSchema= new Schema ({
    word: {
        type: String,
        required: true
    },
    translation:{
        type: String,
        required: true
    },
    folderId:{
        type: Schema.Types.ObjectId,
        ref: 'Folder',
        required: true
    }
})

const WordModel = mongoose.model('Flashcard', wordSchema)

export default WordModel