const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)"; 
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err);
            return res.send(createError.InternalServerError());
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT *FROM login WHERE `email` = ? AND `password` = ?"; 
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if(data.length > 0){
         return res.json("Success");
        } else{
            return res.status(401).json("Fail");
        }
    });
});

app.listen(8081,()=>{
    console.log("listening");
})