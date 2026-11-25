# Book Tracker — Book Management REST API
An academic backend project (CSE 341) for managing book collections and user information. It stores book details such as title, author, genre, publication date, reading status, rating, and description.
## Features
- Create, retrieve, update, and delete books and users
- MongoDB database integration using Mongoose
- GitHub OAuth configuration using Passport.js
- Swagger API documentation
## Tech stack
JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport.js, Swagger.
## API endpoints
### Books
- **GET** `/books` - List books.
- **GET** `/books/:id` - Retrieve a book.
- **POST** `/books` - Create a book.
- **PUT** `/books/:id` - Update a book.
- **DELETE** `/books/:id` - Delete a book.
### Users
- **GET** `/users` - List users.
- **GET** `/users/:id` - Retrieve a user.
- **POST** `/users` - Create a user.
- **PUT** `/users/:id` - Update a user.
- **DELETE** `/users/:id` - Delete a user.
