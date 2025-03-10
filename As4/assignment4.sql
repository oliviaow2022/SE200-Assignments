DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS borrowers;

-- Task 1
create table books(
book_id serial primary key,
title varchar(100) not null,
author varchar(50) not null,
publication_year int,
isbn varchar(13) unique,
price decimal(8,2),
stock int
);

create table borrowers(
borrower_id serial primary key,
first_name varchar(50),
last_name varchar(50),
email varchar(100) unique,
registration_date date
);

-- Task 2
insert into books (title, author, publication_year, isbn, price, stock)
values ('To Kill a Mockingbird', 'Harper Lee', 1960, '9780446310789', 12.99, 5),
('1984', 'George Orwell', 1949, '9780451524935', 9.99, 8),
('Pride and Prejudice', 'Jane Austen', 1813, '9780141439518', 7.99, 10),
('The Great Gatsby', 'F. Scott Fitzgerald', 1925, '9780743273565', 11.99, 6),
('One Hundred Years of Solitude', 'Gabriel García Márquez', 1967, '9780060883287', 14.99, 4),
('The Catcher in the Rye', 'J.D. Salinger', 1951, '9780316769174', 8.99, 7),
('To the Lighthouse', 'Virginia Woolf', 1927, '9780156907392', 10.99, 3),
('Brave New World', 'Aldous Huxley', 1932,'9780060850524',11.99, 5),
('The Hobbit', 'J.R.R. Tolkien', 1937,'9780261102217', 13.99, 9),
('Fahrenheit 451', 'Ray Bradbury', 1953,'9781451673319',9.99, 6);

insert into borrowers (first_name, last_name, email, registration_date)
values('John','Doe', 'john.doe@email.com','2024-01-15'),
('Jane', 'Smith', 'jane.smith@email.com', '2024-02-03'),
('Michael', 'Johnson', 'michael.j@email.com', '2024-01-22'),
('Emily', 'Brown', 'emily.brown@email.com', '2024-03-10'), 
('David', 'Wilson', 'david.wilson@email.com', '2024-02-18'),
('Sarah', 'Taylor', 'sarah.t@email.com', '2024-01-30'),
('Robert', 'Anderson', 'robert.a@email.com', '2024-03-05'),
('Lisa', 'Martinez', 'lisa.m@email.com', '2024-02-12'),
('William', 'Thomas', 'william.t@email.com', '2024-01-19'),
('Jennifer','Garcia', 'jennifer.g@email.com', '2024-03-01');

-- Task 3
select * from books where publication_year > 1950;

select * from borrowers where EXTRACT(YEAR FROM registration_date) = '2024';

select sum(stock) as total_stock from books;

select concat(first_name, ' ', last_name) as full_name from borrowers;

-- Task 4
select title, price * stock as inventory_value from books;

select concat(author, ': ', title) as author_title from books;

select upper(title) as uppercase_title from books;

-- Task 5
select * from books where price between 10 and 20;

select * from borrowers where last_name like 'S%'

select * from books where stock < 5;

-- Task 6
select * from books where publication_year < 1960 and price < 10;

select * from borrowers where email like '%@email.com' and EXTRACT(YEAR FROM registration_date) == '2024';

-- Task 7
update books set price = price * 1.10;
select * from books;

delete from borrowers where EXTRACT(YEAR FROM registration_date) < '2023'

-- Task 8
select * from books order by price desc limit 5;

select * from borrowers order by registration_date desc limit 5 offset 2;

-- Task 9
select author, count(author) as book_count from books group by author having count(author) > 2;

select publication_year, avg(price) as avg_price from books group by publication_year having count(publication_year) > 3;