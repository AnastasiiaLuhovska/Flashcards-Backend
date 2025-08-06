import {getAllFolders, postFolder} from "../services/folders.js";
import {AsyncController} from "../types/types.js";

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
