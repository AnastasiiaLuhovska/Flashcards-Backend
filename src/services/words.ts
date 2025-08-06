import WordModel from "../db/models/ wordModel.js";
import { ReceivedWord, WordForPost} from "../types/types.js";
import {Types} from "mongoose";

export const getAllWordsByFolder = async(id:string):Promise<ReceivedWord[]> => {
    return await WordModel.find({folderId: id})
};

export const postWord = async(word:WordForPost):Promise<ReceivedWord>=>{
    return await WordModel.create(word)
}

export const deleteWords = async(folderId:Types.ObjectId)=>{
    return await WordModel.deleteMany({ folderId: folderId })
}

export const deleteWord = async(id:Types.ObjectId)=>{
    return await WordModel.findOneAndDelete({ _id: id })
}