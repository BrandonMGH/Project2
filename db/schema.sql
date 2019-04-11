DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

USE exampledb;

INSERT INTO Users (user_name, email, password, createdAt, updatedAt) VALUES ("Hi", "Hi@Email.com", "Hiagain", "1000-01-01 00:00:00", "1000-01-01 00:00:00");
INSERT INTO Topics (createdAt, updatedAt) VALUES ("1000-01-01 00:00:00", "1000-01-01 00:00:00");
INSERT INTO Topics (createdAt, updatedAt) VALUES ("1000-01-01 00:00:00", "1000-01-01 00:00:00");
INSERT INTO Topics (createdAt, updatedAt) VALUES ("1000-01-01 00:00:00", "1000-01-01 00:00:00");
INSERT INTO Topics (createdAt, updatedAt) VALUES ("1000-01-01 00:00:00", "1000-01-01 00:00:00");
INSERT INTO Topics (createdAt, updatedAt) VALUES ("1000-01-01 00:00:00", "1000-01-01 00:00:00");
INSERT INTO Topics (createdAt, updatedAt) VALUES ("1000-01-01 00:00:00", "1000-01-01 00:00:00");

INSERT INTO Threads (title, UserId, TopicId, createdAt, updatedAt ) VALUES ("Thread 1", 1, 1, "1000-01-01 00:00:00" ,"1000-01-01 00:00:00" );
INSERT INTO Threads (title, UserId, TopicId, createdAt, updatedAt ) VALUES ("Thread 2", 1, 2, "1000-01-01 00:00:00" ,"1000-01-01 00:00:00" );
INSERT INTO Threads (title, UserId, TopicId, createdAt, updatedAt ) VALUES ("Thread 3", 1, 3, "1000-01-01 00:00:00" ,"1000-01-01 00:00:00" );
INSERT INTO Threads (title, UserId, TopicId, createdAt, updatedAt ) VALUES ("Thread 4", 1, 4, "1000-01-01 00:00:00" ,"1000-01-01 00:00:00" );
INSERT INTO Threads (title, UserId, TopicId, createdAt, updatedAt ) VALUES ("Thread 5", 1, 5, "1000-01-01 00:00:00" ,"1000-01-01 00:00:00" );
INSERT INTO Threads (title, UserId, TopicId, createdAt, updatedAt ) VALUES ("Thread 6", 1, 6, "1000-01-01 00:00:00" ,"1000-01-01 00:00:00" );

INSERT INTO Posts (title, body, createdAt, updatedAt, ThreadId, TopicId, UserId) VALUES ("Post 1", "Body 1", "1000-01-01 00:00:00", "1000-01-01 00:00:00", 1, 1, 1);
INSERT INTO Posts (title, body, createdAt, updatedAt, ThreadId, TopicId, UserId) VALUES ("Post 2", "Body 2", "1000-01-01 00:00:00", "1000-01-01 00:00:00", 1, 1, 1);

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;
