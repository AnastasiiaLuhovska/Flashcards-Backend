export class NotFoundError extends Error {
    public status= '404';
    constructor(message:string){
        super(message);
        this.message = message;
        this.name = 'NotFoundError';
    }
}