import * as express from 'express';
import { request } from 'http';
import Post from './post.interface';

class PostsController {
    private path = '/posts';
    private router = express.Router();

    private posts: Post[] = [{
        author: 'JAMES ALLEN',
        content: 'WHAT YOU BECOME , WHAT YOU BELIVE',
        title: 'As a Man Thinketh',
    }];

    constructor() {
        this.intializeRoutes();
    }

    // INITIALIZE ALL ROUTES FROM POSTS MOUDLE
    private intializeRoutes() {
        this.router.get("", this.weoclome)
        this.router.get(this.path + "/get", this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }

    // GETALLPOST DEFINATION
    getAllPosts =  (_request: express.Request, response: express.Response) => {
        console.log(this.posts);
        console.log(this.posts);
        response.send(this.posts);
    }


    // CREATE POST DEFINATION
    createAPost = (_request: express.Request, response: express.Response) => {
        const post: Post = _request.body;
        this.posts.push(post);
        response.send(post);
    }

    // Wel-come Controller
    weoclome = (_request: express.Request, response: express.Response) => {
        response.send("Welcome - Application running......")
    }
}

export default PostsController;