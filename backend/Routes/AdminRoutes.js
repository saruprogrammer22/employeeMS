import express from 'express';
import con from '../utils/db.js'
import  jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import multer from 'multer';
import path from 'path';
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

// image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})
// end image upload


router.post("/add_employee",upload.single("image"), (req, res) => {
    const sql = "INSERT INTO worker (name,email,password,address,category,image,salary) VALUES (?)";
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) return res.json({Status: false, Error: "Query ERROR"})
        const values = [
            req.body.username,
            req.body.email,
            hash,
            req.body.address,
            req.body.category,
            req.file.filename,
            req.body.salary
        ]
        con.query(sql, [values], (err, result) => {
            if(err) return res.json({Status: false, Error: "Querry error"})
            return res.json({Status: true, Result: result})
        })
    })
})

router.get("/employee", (err, res) => {
    const sql = "SELECT * FROM worker";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "query error"})
        return res.json({Status: true, Result: result})
    })
})

router.get("/employee/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM worker WHERE id = ?";
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "query error"})
        return res.json({Status: true, Result: result})
    })

})

router.put("/edit_employee/:id", (req, res) => {
    const id = req.params.id;
    const sql = "UPDATE worker set name = ?, email = ?, address = ?, category = ?, salary = ? WHERE id = ?"
    const values = [
        req.body.name,
        req.body.email,
        req.body.address,
        req.body.category,
        req.body.salary
    ]
    con.query(sql, [...values,id], (err, result) => {
        if(err) return res.json({Status: false, Error:"Query error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.delete("/delete_employee/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM worker WHERE id = ?";
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get("/admin_count", (req, res) => {
    const sql = "select count(id) as admin from person";
    con.query(sql, (err,result) => {
        if(err) return res.json({Status: false, Error: "QUery error"+err})
        return res.json({Status: true, Result: result})
    })
})
router.get("/employee_count", (req, res) => {
    const sql = "select count(id) as worker from worker";
    con.query(sql, (err,result) => {
        if(err) return res.json({Status: false, Error: "QUery error"+err})
        return res.json({Status: true, Result: result})
    })
})
router.get("/salary_count", (req, res) => {
    const sql = "select sum(salary) as salary from worker";
    con.query(sql, (err,result) => {
        if(err) return res.json({Status: false, Error: "QUery error"+err})
        return res.json({Status: true, Result: result})
    })
})


router.get("/admin", (req, res) => {
    const sql = "SELECT * FROM person"
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "query error" +err})
        return res.json({Status: true, Result: result})
    })
})

export {router as adminRouter}