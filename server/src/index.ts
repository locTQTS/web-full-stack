import mongoose from 'mongoose';
import express, { request, response } from "express"
import DeckModel from './models/desk';
const app = express();


app.get("/", (req, res) => {
    res.send("cc")

})
const port = 9000
mongoose.connect("mongodb+srv://pro3t:123@cluster0.dowopgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        app.listen(port, () => {
            console.log(`Lần sau nhớ thêm console.log thằng ngu : ${port}`)
        })
    })



