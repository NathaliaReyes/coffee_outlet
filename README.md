# ☕coffee-outlet
This is a Full Stack Application.

## App appearance
![Website-appearance](/assets/homepage.png)
![Website-appearance](/assets/coffeeshop.png)
![Website-appearance](/assets/info.png)
![Website-appearance](/assets/map.png)

## Description
This project, titled "Coffee Outlet", is an interactive web application designed for coffee enthusiasts. It operates on the Model-View-Controller (MVC) architectural pattern and provides a platform for users to share their experiences by posting about new coffee shops. Users can also provide feedback on coffee shops added by themselves or others, fostering a community of shared insights and experiences.

One of the unique features of Coffee Outlet is its point system. Users earn points for adding new coffee shops, encouraging active participation within the community.

The application is built using Node.js, Express.js, and Sequelize for robust back-end operations, Handlebars.js for seamless front-end interactions, and PostgreSQL for reliable data persistence. Deployed on Render, Coffee Outlet offers a user-friendly interface that makes it easy for coffee lovers to connect, share, and engage with each other.

[![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Database-Appearance

Entity Relationship Diagram:
📍![ERD](/assets/ERD.png)

Application deployed using Render:
[LINK-APPLICATION](https://coffee-outlet.onrender.com/)

## Table of Contents
- [☕coffee-outlet](#coffee-outlet)
  - [App appearance](#app-appearance)
  - [Description](#description)
  - [Database-Appearance](#database-appearance)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [💻Technologies Used](#technologies-used)
  - [License](#license)
  - [Features](#features)
  - [Future Development](#future-development)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [❔Questions](#questions)

## Installation

To install this application, you'll need Node.js and npm installed on your computer. Follow these steps:

1. Clone this repository to your local machine using `git clone <https://github.com/Nihsad/coffee-outlet.git>` or `git clone <git@github.com:Nihsad/coffee-outlet.git>`.
2. Navigate to the cloned repository in your terminal `cd coffee-outlet`.
3. Install the necessary npm packages by running `npm install`.
4. Ensure you have a PostgreSQL server running and accessible (change credentials-username, password..).
5. Set up your database by running the provided schema file in your PostgreSQL client `psql -U <username>` and `\i db/schema.sql`.
6. Seed the database, `npm run seed`.
7. Start the application by running `npm run start` in your terminal.

Please refer to the `Usage` section for more details on how to use the application.

## Usage

1. **Access the application:** Navigate to the deployed application URL. You will be presented with a list of cities in Colorado.
  test
2. **Select a city:** Click on a city to view a list of all coffee shops in that city.

3. **Create an account or log in:** To interact with the application, you will need to log in. Click on the "Login" button and enter your credentials. If you do not have an account, click on "Sign Up" to create a new account.

4. **View a coffee shop:** After logging in, you can view the details of any coffee shop. Navigate to the coffee shop you are interested in to see more details.

5. **Post a new coffee shop:** As a user, you can share your experiences by posting new coffee shops. Navigate to the "Add Coffee Shop" section, fill in the details about the coffee shop, and click "Submit". You will earn points for each new coffee shop you add.

6. **Provide feedback on a coffee shop:** You can also provide feedback on coffee shops added by yourself or others. Navigate to the coffee shop you want to provide feedback on, enter your feedback in the "Add Feedback" section, and click "Submit".

7. **Earn points:** Active participation is encouraged in the Coffee Outlet community. You earn points for adding new coffee shops, which can be viewed in your profile.

## Credits

This project was completed in collaboration with the following team members:

- [Silvia Reyes]([GitHub profile 💼](https://github.com/NathaliaReyes))
- [Morgan Carmichael]([GitHub profile 💼](https://github.com/Nihsad))
- [Zach Cook]([GitHub profile 💼](https://github.com/ZachCook23/ZachCook23))

We followed Agile methodologies and practices throughout the development process.

Some material and concepts used in this challenge were learned from the [University of Denver Bootcamp](https://bootcamp.du.edu/coding/).

[pgAdmin4](https://www.pgadmin.org/) is an open-source tool for PostgreSQL with a built-in ERD tool.

## 💻Technologies Used

This project was built using the following technologies:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [Handlebars.js](https://handlebarsjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Render](https://render.com/)
- [Bulma](https://bulma.io/)
- [Nodemon](https://nodemon.io/)
- [Sequelize](https://sequelize.org/)
- [Multer](https://www.npmjs.com/package/multer)
- [Leaflet](https://leafletjs.com/)
- [FontAwesome](https://fontawesome.com/)
- [Nodemailer](https://nodemailer.com/about/)
- [Sweetalert2](https://sweetalert2.github.io/)
- [Postman](https://www.postman.com/)
- [Express-Session](https://www.npmjs.com/package/express-session)
- [Cookies](https://www.npmjs.com/package/cookies)

## License

This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Features

+ **User Registration and Authentication:** Users can create a new account and log in. This ensures that only authenticated users can create, update, or delete coffee shops and feedback.

+ **Coffee Shop Creation:** Logged in users can add new coffee shops. This allows users to share their experiences and contribute to the community.

+ **Feedback System:** Users can provide feedback on coffee shops added by themselves or others. This fosters a community of shared insights and experiences.

+ **Point System:** Users earn points for adding new coffee shops, encouraging active participation within the community.

+ **City Selection:** Users can select a city to view a list of all coffee shops in that city. This provides a localized experience for users.

+ **Interactive Map:** An interactive map provides a visual representation of coffee shop locations, enhancing user experience.

## Future Development

Here are some enhancements planned for future development:

+ **Geolocation:** When a user enters the website, automatically display their location and nearby cafes.

+ **Social Login:** Allow users to connect, register, or log in to the application using their Google or Facebook accounts.

+ **Point Redemption:** Enable users to earn points by providing feedback and redeem them for free coffee.

+ **Cloud Image Upload:** Utilize a cloud service that allows uploading images regardless of size or quality.

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature`)
5. Open a Pull Request

## Tests

n/a

## ❔Questions
If you have any questions, feedback, or suggestions, feel free to reach out! You can contact us through our GitHub profiles or via email.

GitHub Profile 💻: [NathaliaReyes](https://github.com/NathaliaReyes)
Email 📧: snrvdevelopment@gmail.com
LinkedIn 👩🏻‍💻: [SilviaReyes](https://www.linkedin.com/in/silvia-reyes-2b907123b/)

GitHub Profile 💻: [Nihsad](https://github.com/Nihsad)
Email 📧: nihsadd@gmail.com

GitHub Profile 💻: [Nihsad](https://github.com/ZachCook23)
Email 📧: zjclaw@gmail.com



We're always open to discussions and eager to help. Don't hesitate to get in touch!



***Thanks for stopping!***

