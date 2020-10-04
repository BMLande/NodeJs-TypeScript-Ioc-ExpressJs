/*
THIS IS A SERVER STARTING POINT IN DEVELPOMENT MODE
*/

import dotenv from "dotenv";
import App from './app';
import PostsController from './posts/posts.controller';




// INITIALIZE CONFIGURATION
dotenv.config();


// PORT IS NOW AVAILABLE TO THE NODE.JS RUNTIME
// AS IF IT WERE AN ENVIRONMENT VARIABLE
const port = process.env.SERVER_PORT;


// ADD ALL ROUTES MIDDLEWARE AND PASS PORT
const app = new App(
    [
        new PostsController(),
    ],

);



// STARTUNG SERVER
app.listen(port);