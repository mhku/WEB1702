CREATE DATABASE msg CHARSET=UTF8;
USE msg;
CREATE TABLE t_msg(
  mid     INT PRIMARY KEY AUTO_INCREMENT,
  content VARCHAR(200),
  uname   VARCHAR(20)
);
