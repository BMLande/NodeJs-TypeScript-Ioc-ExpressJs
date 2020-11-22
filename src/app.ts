import express from "express";
import dotenv from "dotenv";
import * as bodyParser from 'body-parser';
import logger from './shared/Logger';


class App {
    private app: express.Application;
    private port: number = 3000;
    constructor(controllers: any) {
        this.app = express();
        //  CALL MIDDLEWARE INITIALIZATION
        this.initializeMiddlewares();
        // INITIALIZE CONTROLLER AND ROUTES
        this.initializeControllers(controllers);
    }

    // ADD ALL MIDDLEWARE INITIALIZATIIN HERE
    private initializeMiddlewares() {
        dotenv.config();
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router);
        });
    }

    // SERVER START METHODE DEFINATION
    public listen() {
        console.log(this.port);
        this.app.listen(this.port, () => {
            logger.info(`App listening on the port : ${this.port}`);
        });
    }

}

export default App;