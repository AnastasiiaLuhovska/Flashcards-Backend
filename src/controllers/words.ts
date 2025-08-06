import {deleteWord, getAllWordsByFolder, postWord} from "../services/words.js";
import {getFolderByID} from "../services/folders.js";
import {NotFoundError} from "../errors/errors.js";
import {AsyncController} from "../types/types.js";

export const getAllWordsController: AsyncController =  async (req, res, next)=>{
       const folderExists = await getFolderByID(req.params.folderId)
       if(!folderExists){
           next(new NotFoundError('Folder was not found'))
           return
       }
           const words = await getAllWordsByFolder(req.params.folderId)
           res.json({
               status: 200,
               message: 'Words was found successfully',
               data: words
           })

}

export const postWordController:AsyncController = async(req, res)=>{
    const word = await postWord(req.body)
    res.json({
        status:201,
        message:'Word is added successfully',
        data: word
    })
}

export const deleteWordController:AsyncController = async(req, res, next) =>{
    const word = await deleteWord(req.body)
    if(!word){
        next(new NotFoundError('Word was not found'))
        return
    }
        res.json({
            status:200,
            message:'Word is deleted successfully'
        })
}