import FoldersModel from "../db/models/folderModel.js";
import {FolderForPost, ReceivedFolder} from "../types/types.js";

export const getAllFolders = async():Promise<ReceivedFolder[]> => {
    return await FoldersModel.find()
};

export const getFolderByID = async(id:string):Promise<ReceivedFolder> => {
    return await FoldersModel.findById(id)
};

export const postFolder = async(folder:FolderForPost):Promise<ReceivedFolder>=>{
    return await FoldersModel.create(folder)
}

