import express, { request, response } from "express"
import mongoose from "mongoose";
import {PORT, mongoDBURL} from "./config.js";
import { Book } from "./models/bookModel.js";
import cors from 'cors';
import booksRoute from './routes/booksRoute.js'

const app = express();

app.use(express.json());

/*app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));*/
app.use(cors());

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send("Home Page");
})

app.use('/books',booksRoute);

mongoose.connect(mongoDBURL).then(()=>{
    console.log("App connected to DB");
    app.listen(PORT, ()=>{
        console.log("test");
    })
}).catch((error)=>{
    console.log(error)
})