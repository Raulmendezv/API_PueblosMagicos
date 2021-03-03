CREATE TABLE town(
     Town_ID INT NOT NULL AUTO_INCREMENT,
     Town_Name VARCHAR(50) NOT NULL,
     Town_Biome VARCHAR(20) NOT NULL,    
     Town_Weather VARCHAR(20) NOT NULL,
     Town_Incorporation_Date DATE NOT NULL,
     Town_City VARCHAR(50) NOT NULL,
     Town_State VARCHAR(50) NOT NULL,
     PRIMARY KEY(Town_ID)
 );

CREATE TABLE town_photos(
     Town_ID INT NOT NULL,
     Town_Photo_ID INT NOT NULL,
     Town_Photo VARCHAR(100) NOT NULL,
     PRIMARY KEY(Town_Photo_ID),
     FOREIGN KEY(Town_ID) REFERENCES town(Town_ID)
 );

CREATE TABLE town_dishes(
     Town_ID INT NOT NULL,
     Town_Dishes_ID INT NOT NULL,
     Town_Dishes VARCHAR(100) NOT NULL,
     PRIMARY KEY(Town_Dishes_ID),
     FOREIGN KEY(Town_ID) REFERENCES town(Town_ID)
 );

CREATE TABLE town_ethnics(
     Town_ID INT NOT NULL,
     Town_Ethnics_ID INT NOT NULL,
     Town_Ethnics VARCHAR(30) NOT NULL,
     PRIMARY KEY(Town_Ethnics_ID),
     FOREIGN KEY(Town_ID) REFERENCES town(Town_ID)
 );

CREATE TABLE town_festivities(
     Town_ID INT NOT NULL,
     Town_Festivities_ID INT NOT NULL,
     Town_Festivities VARCHAR(120) NOT NULL,
     PRIMARY KEY(Town_Festivities_ID),
     FOREIGN KEY(Town_ID) REFERENCES town(Town_ID)
 );

CREATE TABLE town_attractions(
     Town_ID INT NOT NULL,
     Town_Attraction_ID INT NOT NULL,
     Town_Attraction VARCHAR(120) NOT NULL,
     PRIMARY KEY(Town_Attraction_ID),
     FOREIGN KEY(Town_ID) REFERENCES town(Town_ID)
 );


CREATE TABLE user(
     User_ID INT NOT NULL AUTO_INCREMENT,
     User_Password VARCHAR(50) NOT NULL,
     User_Age INT NOT NULL,    
     User_Gender ENUM(“M”,”F”,”X”),
     User_State VARCHAR(50) NOT NULL,
     User_Bio VARCHAR(150),
     User_Username VARCHAR(30) NOT NULL,
     User_Photo VARCHAR(100),
     PRIMARY KEY(User_ID)
 );

CREATE TABLE user_email(
     User_ID INT NOT NULL,
     User_Email_ID INT NOT NULL,
     User_Email VARCHAR(50) NOT NULL,
     PRIMARY KEY(User_Email_ID),
     FOREIGN KEY(User_ID) REFERENCES user(User_ID)
 );


CREATE TABLE review(
     Review_ID INT NOT NULL AUTO_INCREMENT,
     User_ID  INT NOT NULL,
     Town_ID INT NOT NULL,    
     Review_Rate ENUM(‘1’,’2’,’3’,’4’,’5’) NOT NULL,
     Review_Advising VARCHAR(150),
     Review_Safety_Rate ENUM(‘1’,’2’,’3’,’4’,’5’),
     Review_Creation_Date TIMESTAMP NOT NULL,
     PRIMARY KEY(Review_ID),
     FOREIGN KEY(User_ID) REFERENCES user(User_ID),
     FOREIGN KEY(Town_ID) REFERENCES town(Town_ID)
 );


CREATE TABLE admin(
     Admin_ID INT NOT NULL AUTO_INCREMENT,
     Admin_Password  VARCHAR(50) NOT NULL,
     Admin_Username VARCHAR(30) NOT NULL,
     PRIMARY KEY(Admin_ID)
 );

CREATE TABLE admin_email(
     Admin_ID INT NOT NULL,
     Admin_Email_ID INT NOT NULL,
     Admin_Email VARCHAR(50) NOT NULL,
     PRIMARY KEY(Admin_Email_ID),
     FOREIGN KEY(Admin_ID) REFERENCES admin(Admin_ID)
 );