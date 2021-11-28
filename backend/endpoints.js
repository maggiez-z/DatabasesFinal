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
const CREATE_RATE_REST_SQL = process.env.CREATE_RATE_REST_SQL;
const CREATE_REST_QUESTION_SQL= process.env.CREATE_REST_QUESTION_SQL;
const CREATE_HAS_ANSWER_SQL= process.env.CREATE_HAS_ANSWER_SQL;

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

db.run(CREATE_RATE_REST_SQL, err => {
  if (err) {
      return console.error(err.message);
  }
  console.log("Successfully created Rate_restaurant table!");
});

db.run(CREATE_REST_QUESTION_SQL, err => {
  if (err) {
      return console.error(err.message);
  }
  console.log("Successfully created Restaurant_question table!");
});

db.run(CREATE_HAS_ANSWER_SQL, err => {
  if (err) {
      return console.error(err.message);
  }
  console.log("Successfully created Has_answer table!");
});

router.get('/', (req, res) => {
    res.send('{"msg": "Welcome to Spartan Dining Guide"}');
});

//Users table 
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

router.get('/verifyLogin/:user_name/:password', (req, res) => {
  db.all(
    'SELECT * FROM User WHERE user_name = ? AND password = ?;',
    [req.params.user_name, req.params.password],
    function(err, rows) {
      err ? res.send(err) : res.send(rows);
    }
  )
});

router.get('/highestUserId', (req, res) => {
  db.all(
    'SELECT MAX(user_id) as max FROM User;',
    function(err, rows) {
      err ? res.send(err) : res.send(rows);
    }
  )
});

//Restaurants table 
router.get('/restaurants', (req, res) => {
    db.all(
        'SELECT restaurant_id, restaurant_name, area, address, chef, capacity, phone_number, website, cuisine, Monday_From, Monday_To, Tuesday_From, Tuesday_To, Wednesday_From, Wednesday_To, Thursday_From, Thursday_To, Friday_From, Friday_To, Saturday_From, Saturday_To, Sunday_From, Sunday_To FROM Restaurant;',
        function(err, rows){
          if (err){
            res.send(err);
          } 
          else { 
            res.send(rows);
        }
    });
});

router.post('/postrestaurant', (req, res) => {
    db.run(
      'INSERT INTO Rest (restaurant_id, restaurant_name, area, address, chef, capacity, phone_number, website, cuisine, Monday_availability, Tuesday_availability, Wednesday_availability, Thursday_availability, Friday_availability, Saturday_availability, Sunday_availability) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
      [req.body.restaurant_id, req.body.restaurant_name, req.body.area, req.body.address, req.body.chef, req.body.capacity, req.body.phone_number, req.body.website, req.body.cuisine, req.body.Monday_availability, req.body.Tuesday_availability, req.body.Wednesday_availability, req.body.Thursday_availability, req.body.Friday_availability, req.body.Saturday_availability, req.body.Sunday_availability],
      function(err) {
        if (err){
          res.send(err);
        } 
        else { 
          res.send(this);
        }
    });
});

router.get('/getRest/:restaurant_id', (req, res) => {
    db.all(
      'SELECT * FROM Rest WHERE restaurant_id = ?;',
      [req.params.restaurant_id],
      function(err, rows) {
        err ? res.send(err) : res.send(rows);
      }
    )
});

//Menu table
router.get('/menus', (req, res) => {
    db.all(
        'SELECT menu_id, type FROM Menu;',
        function(err, rows){
          if (err){
            res.send(err);
          } 
          else { 
            res.send(rows);
        }
    });
});

router.post('/postmenu', (req, res) => {
    db.run(
      'INSERT INTO Menu (menu_id, type) VALUES (?, ?);',
      [req.body.menu_id, req.body.type],
      function(err) {
        if (err){
          res.send(err);
        } 
        else { 
          res.send(this);
        }
    });
});

router.get('/getMenu/:restaurant_id', (req, res) => {
    db.all(
      'SELECT * FROM Menu WHERE restaurant_id = ?;',
      [req.params.menu_id],
      function(err, rows) {
        err ? res.send(err) : res.send(rows);
      }
    )
});

//Dish table
router.get('/dishes', (req, res) => {
    db.all(
        'SELECT dish_id, dish_name, ingredients, calories, price FROM Dish;',
        function(err, rows){
          if (err){
            res.send(err);
          } 
          else { 
            res.send(rows);
        }
    });
});

router.post('/postdish', (req, res) => {
    db.run(
      'INSERT INTO Dish (dish_id, dish_name, ingredients, calories, price) VALUES (?, ?, ?, ?, ?);',
      [req.body.dish_id, req.body.dish_name, req.body.ingredients, req.body.calories, req.body.price],
      function(err) {
        if (err){
          res.send(err);
        } 
        else { 
          res.send(this);
        }
    });
});

router.get('/getDish/:menu_id', (req, res) => {
    db.all(
      'SELECT * FROM Dish WHERE menu_id = ?;',
      [req.params.dish_id],
      function(err, rows) {
        err ? res.send(err) : res.send(rows);
      }
    )
});

//Rating table
router.get('/ratings', (req, res) => {
    db.all(
        'SELECT user_id, rating_id, comfortability, food_quality, service, cleanliness, comment FROM Write_rating;',
        function(err, rows){
          if (err){
            res.send(err);
          } 
          else { 
            res.send(rows);
        }
    });
});

router.post('/postrating', (req, res) => {
    db.run(
      'INSERT INTO Write_rating (user_id, rating_id, comfortability, food_quality, service, cleanliness, comment) VALUES (?, ?, ?, ?, ?, ?, ?);',
      [req.body.user_id, req.body.rating_id, req.body.comfortability, req.body.food_quality, req.body.service, req.body.cleanliness, req.body.comment],
      function(err) {
        if (err){
          res.send(err);
        } 
        else { 
          res.send(this);
        }
    });
});

router.get('/getRating/:user_id', (req, res) => {
    db.all(
      'SELECT * FROM Write_rating WHERE user_id = ?;',
      [req.params.rating_id],
      function(err, rows) {
        err ? res.send(err) : res.send(rows);
      }
    )
});

//Parking table
router.get('/parking', (req, res) => {
    db.all(
        'SELECT parking_id, parking_address, total_capacting, handicap_capacity, cost FROM Parking;',
        function(err, rows){
          if (err){
            res.send(err);
          } 
          else { 
            res.send(rows);
        }
    });
});

router.post('/postparking', (req, res) => {
    db.run(
      'INSERT INTO Parking (parking_id, parking_address, total_capacting, handicap_capacity, cost) VALUES (?, ?, ?, ?, ?);',
      [req.body.parking_id, req.body.parking_address, req.body.total_capacting, req.body.handicap_capacity, req.body.cost],
      function(err) {
        if (err){
          res.send(err);
        } 
        else { 
          res.send(this);
        }
    });
});

router.get('/getParking/:restaurant_id', (req, res) => {
    db.all(
      'SELECT * FROM Write_rating WHERE restaurant_id = ?;',
      [req.params.parking_id],
      function(err, rows) {
        err ? res.send(err) : res.send(rows);
      }
    )
});

//Question table
router.get('/questions', (req, res) => {
    db.all(
        'SELECT question_id, question, time_asked FROM Ask_question;',
        function(err, rows){
          if (err){
            res.send(err);
          } 
          else { 
            res.send(rows);
        }
    });
});

router.post('/postquestion', (req, res) => {
    db.run(
      'INSERT INTO Ask_question (question_id, question, time_asked) VALUES (?, ?, ?);',
      [req.body.question_id, req.body.question, req.body.time_asked],
      function(err) {
        if (err){
          res.send(err);
        } 
        else { 
          res.send(this);
        }
    });
});

router.get('/getQuestion/:user_id', (req, res) => {
    db.all(
      'SELECT * FROM Ask_question WHERE user_id = ?;',
      [req.params.question_id],
      function(err, rows) {
        err ? res.send(err) : res.send(rows);
      }
    )
});

//Answer table
router.get('/answers', (req, res) => {
    db.all(
        'SELECT answer_id, answer, time_answered FROM Give_answer;',
        function(err, rows){
          if (err){
            res.send(err);
          } 
          else { 
            res.send(rows);
        }
    });
});

router.post('/postanswer', (req, res) => {
    db.run(
      'INSERT INTO Give_answer (answer_id, answer, time_answered) VALUES (?, ?, ?);',
      [req.body.answer_id, req.body.answer, req.body.time_answered],
      function(err) {
        if (err){
          res.send(err);
        } 
        else { 
          res.send(this);
        }
    });
});

router.get('/getAnswer/:user_id', (req, res) => {
    db.all(
      'SELECT * FROM Give_answer WHERE user_id = ?;',
      [req.params.answer_id],
      function(err, rows) {
        err ? res.send(err) : res.send(rows);
      }
    )
});

module.exports = { router, db };