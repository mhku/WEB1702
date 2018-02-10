CREATE DATABASE dangdang CHARSET=utf8;
USE dangdang;
CREATE TABLE dd_book(
 bid      INT PRIMARY KEY AUTO_INCREMENT,
 bname    VARCHAR(20) NOT NULL DEFAULT '',
 pic      VARCHAR(20) NOT NULL DEFAULT '',
 price    DOUBLE(10,2)  NOT NULL DEFAULT 0,
 pubtime  DATETIME     NOT NULL DEFAULT 0
);
INSERT INTO dd_book VALUES(null,'abc1','1.jpg',100,now());
INSERT INTO dd_book VALUES(null,'abc2','1.jpg',100,now());
INSERT INTO dd_book VALUES(null,'abc3','1.jpg',100,now());
INSERT INTO dd_book VALUES(null,'abc4','1.jpg',100,now());
INSERT INTO dd_book VALUES(null,'abc5','1.jpg',100,now());
INSERT INTO dd_book VALUES(null,'abc6','1.jpg',100,now());
INSERT INTO dd_book VALUES(null,'abc7','1.jpg',100,now());
INSERT INTO dd_book VALUES(null,'abc8','1.jpg',100,now());
INSERT INTO dd_book VALUES(null,'abc9','1.jpg',100,now());
INSERT INTO dd_book VALUES(null,'abc10','1.jpg',100,now());
