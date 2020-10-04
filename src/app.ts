import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as bodyParser from 'body-parser';


class App {
    public app: express.Application;

    constructor(controllers: any) {
        this.app = express();
        //  CALL MIDDLEWARE INITIALIZATION
        this.initializeMiddlewares();
        // INITIALIZE CONTROLLER AND ROUTES
        this.initializeControllers(controllers);
    }

    // ADD ALL MIDDLEWARE INITIALIZATIIN HERE
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router);
        });
    }

    // SERVER START METHODE DEFINATION
    public listen(port: string) {
        this.app.listen(port, () => {
            console.log(`App listening on the port ${port}`);
        });
    }

}

export default App;