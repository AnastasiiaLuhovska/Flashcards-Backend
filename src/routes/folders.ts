import {Router} from "express";
import {getFoldersController, postFolderController} from "../controllers/folders.js";
import {getAllWordsController, postWordController} from "../controllers/words.js";
import ctrlWrapper from "../utils/ctrlWrapper.js";

    const router = Router()
    router.get("/folders", ctrlWrapper(getFoldersController));
    router.get('/folders/:folderId',ctrlWrapper(getAllWordsController))
    router.post('/folders', ctrlWrapper(postFolderController))
    router.post('/folders/:folderID', ctrlWrapper(postWordController))
export default router;