/*
THIS IS A SERVER STARTING POINT IN DEVELPOMENT MODE
*/

import dotenv from "dotenv";
import App from './app';
import PostsController from './posts/posts.controller';


// ADD ALL ROUTES MIDDLEWARE AND PASS PORT
const app = new App(
    [
        new PostsController(),
    ]
);



// STARTUNG SERVER
app.listen();