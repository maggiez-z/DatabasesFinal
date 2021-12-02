
INSERT INTO User (user_id, user_name, email, password, address, phone_number, favorite_food) VALUES
  (000001, 'mattepstein', 'mae108@case.edu', 'test1234', 'Ohio', '123-456-7890', 'chicken'),
  (000002, 'karenji', 'krj34@case.edu', 'test12345', 'Ohio', '123-456-7890', 'pasta'),
  (000003, 'zhaokuanchen', 'zxc347@case.edu', 'test12346', 'Ohio', '123-456-7890', 'pizza'),
  (000004, 'maggiebutterfield', 'mlb226@case.edu', 'test12347', 'Ohio', '123-456-7890', 'burgers');

INSERT INTO Restaurant (restaurant_id, restaurant_name, area, address, chef, capacity, phone_number, website, cuisine, Monday_From, Monday_To, Tuesday_From, Tuesday_To, Wednesday_From, Wednesday_To, Thursday_From, Thursday_To, Friday_From, Friday_To, Saturday_From, Saturday_To, Sunday_From, Sunday_To) VALUES
  (000001, 'TheDen', 'southside', 'test1234', 'chefA', 23, '123-456-7890', 'case.edu', 'american', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200'),
  (000002, 'Rascal', 'Uptown', 'test12345', 'chefB', 24, '216-456-7890', 'case.edu', 'Italian', '0700','0200', '0700','0200', '0700','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200'),
  (000003, 'Kenko', 'Uptown', 'test12346', 'chefC', 25, '123-456-1111', 'case.edu', 'Asian', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200'),
  (000004, 'IndianFlame', 'Uptown', 'test12347', 'chefD', 26, '123-456-2222', 'case.edu', 'Indian', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200'),
  (000005, 'McDonald', 'Uptown', 'test12347', 'chefE', 27, '123-456-3333', 'case.edu', 'American', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200'),
  (000006, 'Chopstick', 'Uptown', 'test12347', 'chefF', 28, '123-456-4444', 'case.edu', 'Chinese', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200'),
  (000007, 'Otani', 'Uptown', 'test12347', 'chefG', 29, '123-456-5555', 'case.edu', 'Japanese', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200', '2100','0200');

INSERT INTO Menu (menu_id, type) VALUES
  (000001, 'breakfast'),
  (000002, 'breakfast'),
  (000003, 'lunch'),
  (000004, 'lunch'),
  (000005, 'dinner'),
  (000006, 'dinner');

INSERT INTO Dish (dish_id, dish_name, ingredients, calories, price) VALUES
  (000001, 'Little Den Burger', 'Beef, Lettuce, Tomato', 400, 7),
  (000006, 'Den Burger', 'Beef, Lettuce, Tomato', 400, 7),
  (000002, 'Pokebowl', 'Beef, Lettuce, Shimp', 300, 12),
  (000003, 'Udon bowl', 'Tofu, noodle', 200, 9),
  (000004, 'Ramen', 'pork, corn, noodle', 300, 13),
  (000005, 'Chipotle Burger', 'Beef, Pork, Tomato, lettuce', 450, 8),
  (000007, 'Grand Slam', 'Scrambled Eggs, Bacon, Pancakes or French Toast', 1000, 8),
  (000008, 'Chipotle Burger Jr', 'Beef, Pork, Tomato, lettuce', 450, 8);

INSERT INTO Has_menu (restaurant_id, menu_id) VALUES
  (000001, 000001),
  (000001, 000006),
  (000002, 000002),
  (000003, 000003),
  (000004, 000004),
  (000005, 000005);

INSERT INTO Has_dish(menu_id, dish_id) VALUES
  (000006, 000001),
  (000006, 000006),
  (000001, 000007),
  (000002, 000002),
  (000003, 000003),
  (000004, 000004),
  (000005, 000005);

-- INSERT INTO Write_rating (user_id, rating_id, comfortability, food_quality, service, cleanliness, comment) VALUES
--   (000001, 000001, 4, 4, 4, 4, 'great food'),
--   (000002, 000002, 1, 1, 1, 1, 'it sucks'),
--   (000003, 000003, 4, 4, 4, 4, 'great food'),
--   (000004, 000004, 4, 4, 4, 4, 'great food'),
--   (000005, 000005, 4, 4, 4, 4, 'great food'),
--   (000006, 000006, 4, 4, 4, 4, 'great food'),
--   (000007, 000007, 4, 4, 4, 4, 'great food');

-- INSERT INTO Rating_restaurant (user_id, rating_id, restaurant_id) VALUES
--   (000001, 000001, 000001),
--   (000002, 000002, 000002),
--   (000003, 000003, 000003),
--   (000004, 000004, 000004),
--   (000005, 000005, 000005),
--   (000006, 000006, 000006),
--   (000007, 000007, 000007);

INSERT INTO Parking (parking_id, parking_address, total_capacity, handicap_capacity, cost) VALUES
  (000001, '1750 Ansel RD', 100, 20, 5),
  (000002, '10001 Chester Ave', 111, 20, 5),
  (000003, '1751 Ansel RD', 122, 20, 5),
  (000004, '1752 Ansel RD', 133, 20, 5),
  (000005, '1753 Ansel RD', 144, 20, 5),
  (000006, '1754 Ansel RD', 155, 20, 5),
  (000007, '1755 Ansel RD', 166, 20, 5);

INSERT INTO Ask_question (user_id, question_id, question, time_asked) VALUES
  (000001, 000001, 'how is this restaurant', 'Oct 1'),
  (000002, 000002, 'Is this restaurant quiet', 'Oct 2'),
  (000003, 000003, 'How is the service', 'Oct 3'),
  (000004, 000004, 'Is this restaurant vegan friendly', 'Oct 4'),
  (000005, 000005, 'Does this restaurant provide gluten-free dishes', 'Oct 5');

INSERT INTO Restaurant_question (user_id, question_id, restaurant_id) VALUES
  (000001, 000001, 000001),
  (000002, 000002, 000002),
  (000003, 000003, 000003),
  (000004, 000004, 000004),
  (000005, 000005, 000005);

-- INSERT INTO Give_answer (user_id, answer_id, answer, time_answered) VALUES
--   (1, 000001, 'Worst restaurant', 'Oct 2'),
--   (1, 000002, 'Not quiet', 'Oct 5'),
--   (1, 000003, 'Service is good', 'Oct 6'),
--   (1, 000001, 'No vegan food', 'Oct 7');

-- INSERT INTO Has_answer (user_id , answer_id, question_id) VALUES
--   (000001, 000001, 000001),
--   (000002, 000002, 000002),
--   (000003, 000003, 000003),
--   (000004, 000004, 000004),
--   (000005, 000005, 000005);


INSERT INTO Has_Parking(restaurant_id, parking_id) VALUES
  (000001, 000001),
  (000001, 000002),
  (000002, 000002),
  (000003, 000003),
  (000004, 000004),
  (000005, 000005);
  