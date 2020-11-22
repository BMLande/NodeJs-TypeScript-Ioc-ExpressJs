import { resposneData } from "./resposneData.interface";

export class Response {
    public generateResponse(status: boolean, message: string, data: any): resposneData {
        return {
            status,
            message,
            data
        }

    }
}


