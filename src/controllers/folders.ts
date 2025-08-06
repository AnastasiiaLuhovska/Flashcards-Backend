import {deleteFolder, getAllFolders, postFolder} from "../services/folders.js";
import {AsyncController} from "../types/types.js";
import {NotFoundError} from "../errors/errors.js";
import {deleteWords} from "../services/words.js";

export const getFoldersController: AsyncController =  async(req, res, next)=> {
    const folders = await getAllFolders()
    res.json({
            status: 200,
            message: 'Folders was found successfully',
            data: folders
        }
    )
}

export const postFolderController: AsyncController = async(req, res, next) =>{
    const folder= await postFolder(req.body)
    res.json({
        status: 201,
        message: 'Folder is successfully created',
        data: folder
    })
}

export const deleteFolderController: AsyncController = async (req, res, next)=>{
    const folder = await deleteFolder(req.body)
    if(!folder) {
      next(new NotFoundError("Folder not found"));
      return;
    }

    await deleteWords(req.body)

    res.json({
        status: 200,
        message: 'Folder deleted successfully',
        data: folder
    })
}