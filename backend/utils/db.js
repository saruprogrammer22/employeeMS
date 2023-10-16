import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees"
})

con.connect((error) => {
    if(error) {
        console.log("CONNECTION ERROR");
    } else {
        console.log("CONNECTED");
    }
})

export default con