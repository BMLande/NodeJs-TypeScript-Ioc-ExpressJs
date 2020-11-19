
## Express with TS

- Required NPM packages :

==> typescript

This is a TS compiler which transpile Ts to Js , For thus needs to define config Object , find tsconfig.ts

npm install --save-dev typescript


===> tslint

This Package help finding code errors at writing time
If you’re not familiar with linting, it is a code analysis tool to alert you to potential problems in your code beyond syntax issues.

npm install --save-dev tslint

===> @Types/anyPackageName

Declaration files, if you’re not familiar, are just files that describe the shape of an existing JavaScript codebase to TypeScript. By using declaration files (also called .d.ts files), you can avoid misusing libraries and get things like completions in your editor.

===>ts-node
Use to run TypeScript files directly.

===>shelljs
Use to execute shell commands such as to copy files and remove directories.

===>fs-extra
A module that extends the Node.js file system (fs) module with features such as reading and writing JSON files.

===>rimraf
Use to recursively remove folders.

===>npm-run-all
Use to execute multiple npm scripts sequentially or in parallel.

===>nodemon
A handy tool for running Node.js in a development environment. Nodemon watches files for changes and automatically restarts the Node.js application when changes are detected. No more stopping and restarting Node.js!

===> dotenv

Node.js applications typically use environment variables for configuration.
However, managing environment variables can be a chore. A popular module for managing application configuration data is dotenv.

===> 








IMPORTANT LINKS

https://www.youtube.com/watch?v=Ht4kTcSh92I

https://www.udemy.com/course/understanding-typescript/?couponCode=D_1020

https://developer.okta.com/blog/2018/11/15/node-express-typescript

https://developer.okta.com/blog/2018/11/15/node-express-typescript



-----------------------------------------------------------------------------------------------------------------------


import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as bodyParser from 'body-parser';
const app = express();


// Initialize Express router
const router = express.Router();


// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;


// added Body-Parser Middleware
app.use(bodyParser.json());


// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// default handler
router.get("/", (request, response) => {
    // render the index template
    response.send({
        hostname: request.hostname,
        path: request.path,
        method: request.method,
      });
});


// add all routers
app.use('/', router);



// logs

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Application started on port : ${port}`);
})