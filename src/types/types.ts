import {Types} from "mongoose";
import {NextFunction, Request, Response} from "express";

export interface FolderForPost{
    name: string
}
export interface ReceivedFolder{
    _id: Types.ObjectId
    name: string
}
export interface ReceivedWord{
    _id: Types.ObjectId,
    word: string,
    translation: string,
    folderId: Types.ObjectId
}
export interface WordForPost{
    word: string,
    translation: string,
    folderId: Types.ObjectId
}

export interface AsyncController{
    (req:Request, res:Response, next:NextFunction): Promise<void>
}

export interface CtrlWrapper{
    (controller:AsyncController): AsyncController
}

