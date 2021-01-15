-- DROP TABLE student2;

-- CREATE TABLE student2(
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar NOT NULL,
--     website varchar,
--     github_username varchar,
--     point integer DEFAULT 0 CHECK (point >= 0),
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean DEFAULT FALSE

-- );




--Example of NOT NULL Error

-- INSERT INTO student2 (website, github_username, gender, cohort_start_date) 
-- VALUES ('jaycub.com', 'jaycub_lake', 'M', '2020-11-07');





-- The C in CRUD

-- INSERT INTO student2 VALUES
-- (DEFAULT, 'Riley', 'it.com', 'riley08', 4, 'M', '2021-01-13', FALSE),
-- (DEFAULT, 'Pauline', 'rihanna.com', 'pp6000', 1, 'F', '2021-01-13', FALSE),
-- (DEFAULT, 'Josh', 'gush.com', 'josh666', 6, 'M', '2021-01-13', FALSE);

-- INSERT INTO student2 (name, website, github_username, gender, cohort_start_date) 
-- VALUES ('jaycub', 'jaycub.com', 'jaycub_lake', 'M', '2020-11-07');





--The R in CRUD

-- SELECT * FROM student2;

-- SELECT name, website FROM student2;

-- SELECT name FROM student2 WHERE gender = 'F';

-- SELECT name FROM student2 WHERE gender = 'F';

-- SELECT name, point FROM student2 WHERE point > 4 and gender = 'M';

SELECT * FROM student2 WHERE name ilike '%j%';




--The U in CRUD

-- UPDATE student2 SET  point = 8 WHERE id = 1;

-- UPDATE student2 SET graduated = TRUE;

-- UPDATE student2 SET point = 99, graduated = FALSE WHERE id = 4;





--The D in CRUD

-- DELETE FROM student2 WHERE id = 2;






--Add a column to table

-- ALTER TABLE student2 ADD last_name varchar(25);
-- ALTER TABLE student2 ADD age int DEFAULT 18;


--Drop a column

-- ALTER TABLE student2 DROP COLUMN last_name;



--Alter Column

-- ALTER TABLE student2 ALTER COLUMN website TYPE varchar(100);





--AGGREGATION

-- SELECT COUNT (*) FROM student2;

-- SELECT SUM(point) FROM student2;

-- SELECT AVG(point) FROM student2;

-- SELECT MAX(point) FROM student2;

-- SELECT * FROM student2 ORDER BY point ASC;

-- SELECT name, point, gender FROM student2 ORDER BY gender, point;




--LIMIT/OFFSET

-- SELECT * FROM student2 ORDER BY point LIMIT 2;