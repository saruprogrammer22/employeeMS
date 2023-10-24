import express from "express";
import cors from 'cors'
import { adminRouter } from "./Routes/AdminRoutes.js";
import { EmployeeRouter } from "./Routes/EmployeeRoutes.js";

const app = express();

app.use(express.json());
app.use(cors(
    {
    origin: ["http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
    }
));
app.use(express.static("Public"))

app.use("/auth", adminRouter)
app.use("/employee", EmployeeRouter)



app.listen(8088, ()=> {
    console.log("RUNNING");
})