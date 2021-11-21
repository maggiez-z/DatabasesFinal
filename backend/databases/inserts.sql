INSERT INTO User (user_id, user_name, email, password, address, phone_number, favorite_food) VALUES
  (1, 'mattepstein', 'mae108@case.edu', 'test1234', 'Ohio', '123-456-7890', 'chicken'),
  (2, 'karenji', 'krj34@case.edu', 'test1234', 'Ohio', '123-456-7890', 'pasta'),
  (3, 'frankchen', 'zxc347@case.edu', 'test1234', 'Ohio', '123-456-7890', 'pizza'),
  (4, 'maggiebutterfield', 'mlb226@case.edu', 'test1234', 'Ohio', '123-456-7890', 'burgers');

INSERT INTO Rest (restaurant_id, restaurant_name, area, address, chef, capacity, phone_number, website, cuisine, Monday_availability, Tuesday_availability, Wednesday_availability, Thursday_availability, Friday_availability, Saturday_availability, Sunday_availability) VALUES
  (1, 'TheDen', 'southside', 'test1234', 'chef', 23, '123-456-7890', 'case.edu', 'american', '9-2', '9-2', '9-2', '9-2', '9-2', '9-2', '9-2');

INSERT INTO Menu (menu_id, type) VALUES
  ();

INSERT INTO Dish (dish_id, dish_name, ingredients, calories, price) VALUES
  ();

INSERT INTO Write_rating (user_id, rating_id, comfortability, food_quality, service, cleanliness, comment) VALUES
  ();

INSERT INTO Parking (parking_id, parking_address, total_capacting, handicap_capacity, cost) VALUES
  ();

INSERT INTO Ask_question (question_id, question, time_asked) VALUES
  ();

INSERT INTO Give_answer (answer_id, answer, time_answered) VALUES
  ();