import * as express from 'express';
import Post from './post.interface';

class PostsController {
    public path = '/posts';
    public router = express.Router();

    private posts: Post[] = [
        {
            author: 'JAMES ALLEN',
            content: 'WHAT YOU BECOME , WHAT YOU BELIVE',
            title: 'As a Man Thinketh ',
        }
    ];

    constructor() {
        this.intializeRoutes();
    }

    // INITIALIZE ALL ROUTES FROM POSTS MOUDLE
    public intializeRoutes() {
        this.router.get(this.path + "/get", this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }

    // GETALLPOST DEFINATION
    getAllPosts = (request: express.Request, response: express.Response) => {
        response.send(this.posts);
    }

    // CREATE POST DEFINATION
    createAPost = (request: express.Request, response: express.Response) => {
        const post: Post = request.body;
        this.posts.push(post);
        response.send(post);
    }
}

export default PostsController;