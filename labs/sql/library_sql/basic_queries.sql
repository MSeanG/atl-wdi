-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns
yes


-- Get all information about all authors
SELECT * FROM authors;

-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;

<<<<<<< HEAD
-- Get all authors born in the 20th centruy or later
SELECT birth_year FROM authors WHERE birth_year > 1900;
SELECT authors FROM authors WHERE birth_year > 1900;
SELECT name FROM authors WHERE birth_year > 1900;
SELECT name, birth_year FROM authors WHERE birth_year > 1900;
SELECT * FROM authors WHERE birth_year >= 1900;
=======
-- Get all authors born in the 20th century or later
>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37

-- Get all authors born in the USA
SELECT nationality FROM authors WHERE nationality = 'United States of America';
SELECT name, nationality FROM authors WHERE nationality = 'United States of America';

<<<<<<< HEAD
-- Get all books published on 1985
SELECT * FROM books WHERE publication_date = 1985;
=======
-- Get all books published in 1985
>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37

-- Get all books published before 1989
SELECT * FROM books WHERE publication_date < 1989;

-- Get just the title of all books.
SELECT title FROM books;

-- Get just the year that 'A Dance with Dragons' was published
<<<<<<< HEAD
  -- Cry when you realize how long it's been
SELECT publication_date FROM books WHERE title = 'A Dance with Dragons';
=======
>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT * FROM books WHERE title ILIKE '%the %' OR title ILIKE '% the %' OR title ILIKE '% the%';


-- Add yourself as an author
INSERT INTO authors(name, nationality, birth_year) VALUES ('One Nine', 'United States of America', 1970);
-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books (title, publication_date, author_id)
VALUES
  ('one',2017,9),
  (E'Two\'s',2017,9),
  ('Three''s',2017,9);
-- Update one of your books to have a new title

-- Delete your books

-- Delete your author entry
