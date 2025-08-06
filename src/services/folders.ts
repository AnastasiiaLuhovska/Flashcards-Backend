import FoldersModel from "../db/models/folderModel.js";
import {FolderForPost, ReceivedFolder} from "../types/types.js";
import {Types} from "mongoose";
import WordModel from "../db/models/ wordModel.js";

export const getAllFolders = async():Promise<ReceivedFolder[]> => {
    return await FoldersModel.find()
};

export const getFolderByID = async(id:string):Promise<ReceivedFolder> => {
    return await FoldersModel.findById(id)
};

export const postFolder = async(folder:FolderForPost):Promise<ReceivedFolder>=>{
    return await FoldersModel.create(folder)
}

export const deleteFolder = async(folderId:Types.ObjectId) =>{
    return await FoldersModel.findOneAndDelete({ _id: folderId });
}
