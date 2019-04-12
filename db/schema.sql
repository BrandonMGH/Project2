DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE e7cj6qh5vzj6xt6u;

USE e7cj6qh5vzj6xt6u;

SELECT * from Posts;
SELECT * from Threads; 
SELECT * from Topics;
SELECT * from Users; 


INSERT INTO Users (user_name, email, password, createdAt, updatedAt) VALUES ("Hi", "Hi@Email.com", "Hiagain", "1000-01-01 00:00:00", "1000-01-01 00:00:00");
INSERT INTO Topics (createdAt, updatedAt) VALUES ("1000-01-01 00:00:00", "1000-01-01 00:00:00");
INSERT INTO Topics (createdAt, updatedAt) VALUES ("1000-01-01 00:00:00", "1000-01-01 00:00:00");
INSERT INTO Topics (createdAt, updatedAt) VALUES ("1000-01-01 00:00:00", "1000-01-01 00:00:00");
INSERT INTO Topics (createdAt, updatedAt) VALUES ("1000-01-01 00:00:00", "1000-01-01 00:00:00");
INSERT INTO Topics (createdAt, updatedAt) VALUES ("1000-01-01 00:00:00", "1000-01-01 00:00:00");
INSERT INTO Topics (createdAt, updatedAt) VALUES ("1000-01-01 00:00:00", "1000-01-01 00:00:00");

INSERT INTO Threads (title, UserId, TopicId, createdAt, updatedAt ) VALUES ("Welcome to the Github Thread", 1, 1, "1000-01-01 00:00:00" ,"1000-01-01 00:00:00" );
INSERT INTO Threads (title, UserId, TopicId, createdAt, updatedAt ) VALUES ("Welcome to the Bootstrap Thread ", 1, 2, "1000-01-01 00:00:00" ,"1000-01-01 00:00:00" );
INSERT INTO Threads (title, UserId, TopicId, createdAt, updatedAt ) VALUES ("Welcome to the Node Thread", 1, 3, "1000-01-01 00:00:00" ,"1000-01-01 00:00:00" );
INSERT INTO Threads (title, UserId, TopicId, createdAt, updatedAt ) VALUES ("Welcome to the Jquery Thread", 1, 4, "1000-01-01 00:00:00" ,"1000-01-01 00:00:00" );
INSERT INTO Threads (title, UserId, TopicId, createdAt, updatedAt ) VALUES ("Welcome to the MySQL Thread", 1, 5, "1000-01-01 00:00:00" ,"1000-01-01 00:00:00" );
INSERT INTO Threads (title, UserId, TopicId, createdAt, updatedAt ) VALUES ("Welcome to the Javascript Thread", 1, 6, "1000-01-01 00:00:00" ,"1000-01-01 00:00:00" );

INSERT INTO Posts ( body, createdAt, updatedAt, ThreadId, UserId) VALUES ("Welcome to the Github thread page!  This thread page is dedicated to all topics of interest concerning Github.  If you would like to create a new conversation, please feel free to make a new thread on the threads page.  If you would rather contribute to an existing conversation, please click on any of the existing threads on the Github thread page.  Additional functionality coming soon!", "1000-01-01 00:00:00", "1000-01-01 00:00:00", 8, 1);
INSERT INTO Posts ( body, createdAt, updatedAt, ThreadId, UserId) VALUES ( "Welcome to the Bootstrap thread page!  This thread page is dedicated to all topics of interest concerning Bootstrap.  If you would like to create a new conversation, please feel free to make a new thread on the threads page.  If you would rather contribute to an existing conversation, please click on any of the existing threads on the Bootstrap thread page.  Additional functionality coming soon!", "1000-01-01 00:00:00", "1000-01-01 00:00:00", 9, 1);
INSERT INTO Posts ( body, createdAt, updatedAt, ThreadId, UserId) VALUES ( "Welcome to the Node.JS thread page!  This thread page is dedicated to all topics of interest concerning Node.JS.  If you would like to create a new conversation, please feel free to make a new thread on the threads page.  If you would rather contribute to an existing conversation, please click on any of the existing threads on the Node.JS thread page.  Additional functionality coming soon!", "1000-01-01 00:00:00", "1000-01-01 00:00:00", 10, 1);
INSERT INTO Posts ( body, createdAt, updatedAt, ThreadId, UserId) VALUES ( "Welcome to the Jquery thread page!  This thread page is dedicated to all topics of interest concerning Jquery.  If you would like to create a new conversation, please feel free to make a new thread on the threads page.  If you would rather contribute to an existing conversation, please click on any of the existing threads on the Jquery thread page.  Additional functionality coming soon!", "1000-01-01 00:00:00", "1000-01-01 00:00:00", 11, 1);
INSERT INTO Posts ( body, createdAt, updatedAt, ThreadId, UserId) VALUES ( "Welcome to the MySQL thread page!  This thread page is dedicated to all topics of interest concerning MySQL.  If you would like to create a new conversation, please feel free to make a new thread on the threads page.  If you would rather contribute to an existing conversation, please click on any of the existing threads on the MySQL thread page.  Additional functionality coming soon!", "1000-01-01 00:00:00", "1000-01-01 00:00:00", 12, 1);
INSERT INTO Posts ( body, createdAt, updatedAt, ThreadId, UserId) VALUES ( "Welcome to the Javascript thread page!  This thread page is dedicated to all topics of interest concerning Javascript.  If you would like to create a new conversation, please feel free to make a new thread on the threads page.  If you would rather contribute to an existing conversation, please click on any of the existing threads on the Javascript thread page.  Additional functionality coming soon!", "1000-01-01 00:00:00", "1000-01-01 00:00:00", 13, 1);

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;
