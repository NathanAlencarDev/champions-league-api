import express from "express";
import router from "./routes";
import cors from "cors";


function createApp(){
    const app = express();
    
    //! bodyParser. Middleware. Em resumo ja define que vai haver requisições e o corpo será json
    app.use(express.json());
    app.use("/api", router);
    app.use(cors());

    return app;
}


export default createApp;