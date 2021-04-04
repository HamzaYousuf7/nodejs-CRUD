
CREATE DATABASE IF NOT EXISTS test_db;

USE test_db;

--  product tables
CREATE TABLE IF NOT EXISTS product (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(55) NOT NULL,
    price DECIMAL(5,3) NOT NULL,
    imgURL varchar(255) NOT NULL
);

-- INSERT DUMMY DATA in tables
INSERT INTO product( name, price, imgURL)
	VALUES 
		("car",25.33,"https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
		("car",25.33,"https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
		("car",25.33,"https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
		("car",25.33,"https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
        