import express from "express";
import cors from 'cors'
import { adminRouter } from "./Routes/AdminRoutes.js";


const app = express();

app.use(express.json());
app.use(cors(
    {
    origin: ["http://localhost:5174"],
    methods: ["GET", "POST", "PUT"],
    credentials: true
    }
));

app.use("/auth", adminRouter)

app.listen(8088, ()=> {
    console.log("RUNNING");
})