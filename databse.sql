CREATE DATABASE taskdb;

USE taskdb;

CREATE TABLE status_table (
    sid INT,
    accid INT,
    svalue VARCHAR(10)
);

INSERT INTO status_table VALUES
(10,1,'ACTIVE'),
(20,1,'INACTIVE');

CREATE TABLE records_table (
    gid INT,
    accid INT,
    gname VARCHAR(1000)
);

INSERT INTO records_table VALUES
(1,1,'Football'),
(2,1,'Cricket');