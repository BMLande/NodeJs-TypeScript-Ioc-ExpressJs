"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
// default handler
app.get("/", (req, res) => {
    res.send("Js To Ts demo");
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Application started on port : ${port}`);
});
//# sourceMappingURL=index.js.map