const express = require("express");
const dotenv = require("dotenv");
const https = require("https");
const sqlite = require('sqlite3');

const router = express.Router();
dotenv.config();

const DB_PATH = process.env.DB_PATH;
const CREATE_USER_SQL = process.env.CREATE_USER_SQL;
const CREATE_REST_SQL = process.env.CREATE_REST_SQL;
const CREATE_MENU_SQL = process.env.CREATE_MENU_SQL;
const CREATE_DISH_SQL = process.env.CREATE_DISH_SQL;
const CREATE_WRITE_RATE_SQL = process.env.CREATE_WRITE_RATE_SQL;
const CREATE_PARKING_SQL = process.env.CREATE_PARKING_SQL;
const CREATE_ASK_QUESTION_SQL = process.env.CREATE_ASK_QUESTION_SQL;
const CREATE_GIVE_ANSWER_SQL = process.env.CREATE_GIVE_ANSWER_SQL;
const CREATE_HAS_MENU_SQL = process.env.CREATE_HAS_MENU_SQL;
const CREATE_HAS_DISH_SQL = process.env.CREATE_HAS_DISH_SQL;
const CREATE_HAS_PARKING_SQL = process.env.CREATE_HAS_PARKING_SQL;


const db = new sqlite.Database(DB_PATH, (err) => {
    if (err) {
        console.error("Failed to open database\n" + err.message);
        process.exit();
    }
    console.log("Successfully connected to database!");
});

db.run(CREATE_USER_SQL, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successfully created User table!");
});

db.run(CREATE_REST_SQL, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successfully created Restaurant table!");
});

db.run(CREATE_MENU_SQL, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successfully created Menu table!");
});

db.run(CREATE_DISH_SQL, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successfully created Dish table!");
});

db.run(CREATE_WRITE_RATE_SQL, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successfully created Write_Rating table!");
});

db.run(CREATE_PARKING_SQL, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successfully created Parking table!");
});

db.run(CREATE_ASK_QUESTION_SQL, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successfully created Ask_Question table!");
});

db.run(CREATE_GIVE_ANSWER_SQL, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successfully created Give_Answer table!");
});

db.run(CREATE_HAS_MENU_SQL, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successfully created Has_Menu table!");
});

db.run(CREATE_HAS_DISH_SQL, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successfully created Has_Dish table!");
});

db.run(CREATE_HAS_PARKING_SQL, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successfully created Has_Parking table!");
});

router.get('/', (req, res) => {
    res.send('{"msg": "Welcome to Spartan Dining Guide"}');
});

router.get('/users', (req, res) => {
    db.all(
        'SELECT user_id, user_name, email, password, address, phone_number, favorite_food FROM User;',
        function(err, rows){
          if (err){
            res.send(err);
          } 
          else { 
            res.send(rows);
        }
    });
});

router.post('/postuser', (req, res) => {
    db.run(
      'INSERT INTO User (user_id, user_name, email, password, address, phone_number, favorite_food) VALUES (?, ?, ?, ?, ?, ?, ?);',
      [req.body.user_id, req.body.user_name, req.body.email, req.body.password, req.body.address, req.body.phone_number, req.body.favorite_food],
      function(err) {
        if (err){
          res.send(err);
        } 
        else { 
          res.send(this);
        }
    });
});

router.get('/getUser/:user_id', (req, res) => {
    db.all(
      'SELECT * FROM User WHERE user_id = ?;',
      [req.params.user_id],
      function(err, rows) {
        err ? res.send(err) : res.send(rows);
      }
    )
});

module.exports = { router, db };