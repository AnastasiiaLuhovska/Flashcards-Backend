import WordModel from "../db/models/ wordModel.js";
import { ReceivedWord, WordForPost} from "../types/types.js";

export const getAllWordsByFolder = async(id:string):Promise<ReceivedWord[]> => {
    return await WordModel.find({folderId: id})
};

export const postWord = async(word:WordForPost):Promise<ReceivedWord>=>{
    return await WordModel.create(word)
}
