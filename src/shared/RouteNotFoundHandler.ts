/**
 * Author : Bhagvat Lande , 22 Nov 2020
 * Description : Updated Error route hendler , for any invalied route this response generated and sent to clinet
 * Changes :
 */

import * as express from 'express';
import { ResponseCodes as RESPONSE_CODES } from './StatusCode';
import { Response } from './ResponseEntity';

class RouteNotFoundHandler {
    public router: any;
    private ResponseData = new Response();

    constructor() {
        this.router = express.Router()
        this.intializeRoutes();
    }

    private intializeRoutes() {
        this.router.get("*", this.errorHandler)
    }

    errorHandler = (_request: express.Request, response: express.Response) => {
        response.status(RESPONSE_CODES.NOT_FOUND).json(
            this.ResponseData.generateResponse(false, "Requested Route Not Found", {})
        )
    }

}

export default RouteNotFoundHandler;