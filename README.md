# # Full Stack Authentication: Register, Login, and Profile Card

🔒🔐📇🃏💻🎨

This project focuses on implementing a full stack authentication system that includes user registration, login, and a profile card to display user data. Express is used as the backend framework, JWT is utilized for generating secure cookies, mongoose is employed for database operations, and bcrypt ensures password safety. The project follows a well-defined file structure and includes essential components such as dbconfig, models, controller, routes, server.js, .env, .gitignore. The frontend is developed using HTML, CSS, and JavaScript, with the public folder containing the finished register, login, and user card interfaces.

## Live Demo -->> https://jwtauthbackend.onrender.com/

## Routes

1. `/register`: Allows users to register by providing necessary details.
2. `/login`: Provides a login form for users to authenticate.
3. `/user`: Displays user details in a profile card.
4. `/logout`: Logs the user out of the system.

## Backend Technologies Used

- Express.js: Used as the backend framework to handle routing and HTTP requests.
- JWT (JSON Web Tokens): Used to generate secure cookies for authentication.
- Mongoose: Utilized for database operations and interaction with MongoDB.
- Bcrypt: Ensures password security through hashing.

## Frontend Technologies Used

- HTML: Used for structuring the web pages and user interface elements.
- CSS: Utilized for styling the web pages and enhancing visual appeal.
- JavaScript: Employed for implementing interactive functionalities and dynamic behavior.

## File Structure

📂 root
├── 📂 config   
│   └── db.config.js
├── 📂 model
│   └── user.model.js
├── 📂 controller
│   └── user.controller.js
├── 📂 routes
│   └── user.routes.js
├── 📜 server.js
├── .env
├── .gitignore
└── 📂 public
    ├── 📂 assets
    │   └── img
    └── index.html
    └── login.html
    └── user.html
    └── registerLogin.css
    └── user.css
    └── register.js
    └── login.js
    └── user.js
    

- `dbconfig`: Contains database configuration settings.
- `models`: Includes database models for user data.
- `controller`: Handles the logic and operations for each route.
- `routes`: Defines the API routes and connects them to the controller.
- `server.js`: Entry point for the backend server.
- `.env`: Stores environment variables and sensitive data.
- `.gitignore`: Specifies files and folders to be ignored by version control.
- `public`: Folder containing the frontend code, including HTML, CSS, and JavaScript files.

## Installation and Setup

1. Clone the repository from [GitHub Repository URL].
2. Install the required dependencies using [package manager].
3. Configure the backend server settings in the `.env` file.
4. Set up and configure the MongoDB database.
5. Start the backend server using [command].
6. Open the frontend files in a web browser or host them on a web server.

## Usage

1. Access the application through a web browser.
2. Navigate to `/register` to register a new user by providing the required details.
3. Use the registered credentials to log in through `/login`.
4. Upon successful authentication, the user will be redirected to the `/user` route to view their profile card containing their data.
5. To log out, access the `/logout` route.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, please submit a pull request or open an issue in the GitHub repository.

## Contact

If you have any questions or need assistance with the project, please feel free to contact via mail -->> itsakash18.06@gmail.com || WhatsApp -->> +91 6207234759].

Enjoy working on this project! 🚀😊
