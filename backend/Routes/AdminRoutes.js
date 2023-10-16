import express from 'express';
import con from '../utils/db.js'
import jwt from 'jsonwebtoken'
const router = express.Router();

router.post("/adminlogin", (req, res) => {
    const sql = "SELECT * FROM person Where `email` = ? and `password` = ? "
    con.query(sql, [req.body.email, req.body.password], (err, result) => {

        if(err) return res.json({ loginStatus: false, Error: "QUERRY ERROR"})
        
        if(result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign(
                { role: "admin", email: email },
                "jwt_secret_key",
                { expiresIn: "1d"}
            );
            res.cookie("token", token)
            return res.json({ loginStatus: true });
        } else {
            return res.json({ loginStatus: false, Error: "wrong email or password"});
        }
    })
})

router.get('/category', (req, res) => {
    const sql = "SELECT * FROM category";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Querry error"})
        return res.json({Status: true, Result: result})
    })
})

router.post("/add_category", (req, res) =>{
    const sql = "INSERT INTO category (`name`) VALUES (?)"
    con.query(sql, [req.body.category], (err, result) => {
        if(err) return res.json({Status: false, Error: "Querry error"})
        return res.json({Status: true})
    })
})

export {router as adminRouter}