import express from "express";
import cors from "cors";
import router from "./routes/folders.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(router)
    app.use('*', notFoundHandler)

    app.use(errorHandler)
    app.listen(3000, () => console.log("Server is working"));

};

export default startServer;