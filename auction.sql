
CREATE DATABASE IF NOT EXISTS auction_db;

USE auction_db;

CREATE TABLE items(
id INTEGER (10) auto_increment primary key,

title VARCHAR(50),

object_descr VARCHAR(200),

quantity VARCHAR(30),

bidprice DECIMAL (5,2)


);