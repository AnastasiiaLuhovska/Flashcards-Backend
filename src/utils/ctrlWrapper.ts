import {CtrlWrapper} from "../types/types.js";

const ctrlWrapper: CtrlWrapper = (controller) => {
    return async (req, res, next)=>{
        try{
            await controller(req, res, next);
        }catch(e){
            next(e)
        }
    }
};

export default ctrlWrapper;