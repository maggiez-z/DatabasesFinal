INSERT INTO User (user_id, user_name, email, password, address, phone_number, favorite_food) VALUES
  (000001, 'mattepstein', 'mae108@case.edu', 'test1234', 'Ohio', '123-456-7890', 'chicken'),
  (000002, 'karenji', 'krj34@case.edu', 'test12345', 'Ohio', '123-456-7890', 'pasta'),
  (000003, 'zhaokuanchen', 'zxc347@case.edu', 'test12346', 'Ohio', '123-456-7890', 'pizza'),
  (000004, 'maggiebutterfield', 'mlb226@case.edu', 'test12347', 'Ohio', '123-456-7890', 'burgers');

INSERT INTO Rest (restaurant_id, restaurant_name, area, address, chef, capacity, phone_number, website, cuisine, Monday_availability, Tuesday_availability, Wednesday_availability, Thursday_availability, Friday_availability, Saturday_availability, Sunday_availability) VALUES
  (000001, 'TheDen', 'southside', 'test1234', 'chefA', 23, '123-456-7890', 'case.edu', 'american', '2100-0200', '2100-0200', '2100-0200', '2100-0200', '2100-0200', '2100-0200', '2100-0200')
  (000002, 'Rascal', 'Uptown', 'test12345', 'chefB', 23, '216-456-7890', 'case.edu', 'Italian', '0700-0200', '0700-0200', '0700-0200', '2100-0200', '2100-0200', '2100-0200', '2100-0200')
  (000003, 'Kenko', 'Uptown', 'test12346', 'chefC', 23, '123-456-1111', 'case.edu', 'Asian', '1100-2000', '2100-0200', '2100-0200', '2100-0200', '2100-0200', '2100-0200', '2100-0200')
  (000004, 'IndianFlame', 'Uptown', 'test12347', 'chefD', 23, '123-456-2222', 'case.edu', 'Indian', '1200-2100', '2100-0200', '2100-0200', '2100-0200', '2100-0200', '2100-0200', '2100-0200');

INSERT INTO Menu (menu_id, type) VALUES
  (000001, 'breakfast')
  (000002, 'breakfast')
  (000003, 'lunch')
  (000004, 'lunch')
  (000005, 'dinner')
  (000006, 'dinner');

INSERT INTO Dish (dish_id, dish_name, ingredients, calories, price) VALUES
  (000001, 'Den Burger', 'Beef, Lettuce, Tomato', 400, 7)
  (000002, 'Pokebowl', 'Beef, Lettuce, Shimp', 300, 12)
  (000003, 'Udon bowl', 'Tofu, noodle', 200, 9)
  (000004, 'Ramen', 'pork, corn, noodle', 300, 13)
  (000005, 'Chipotle Burger', 'Beef, Pork, Tomato, lettuce', 450, 8)


INSERT INTO Write_rating (user_id, rating_id, comfortability, food_quality, service, cleanliness, comment) VALUES
  (000001, 000001, 4, 4, 4, 4, 'great food')
  (000002, 000002, 1, 1, 1, 1, 'it sucks');

INSERT INTO Parking (parking_id, parking_address, total_capacting, handicap_capacity, cost) VALUES
  ();

INSERT INTO Ask_question (question_id, question, time_asked) VALUES
  ();

INSERT INTO Give_answer (answer_id, answer, time_answered) VALUES
  ();