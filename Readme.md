## Tables of Contents:

## Description:

This website will match clients with available cars and drivers for transportation in Colorado. The website will consist of a homepage that displays details about the company and the services provided. There will be a button to book a ride, and users can press this to be taken to a booking screen in which they can select the date and time for their ride, and then select the distance they need to travel. Then, a price is determined and the user completes checkout.

## Motivation

The main motivation behind creating this project was to make an application that will help user to easily book an app in ski area like Colorado where driving is risky. Building an app for the company that will provide ride service with their experienced drivers of the mountain. Services like pick up from Airport and drop off at ski resort and user's destination will be provided.

## Challanges

Challanges we faced along the way was connecting to the server and since we used talwind as a third party software it was new to us and difficult to understand at first. But along that way as we were able to understand the concept things got a lot easier. Taking examples from previous minin project understanding the Mode View Controller folder structure and testing routes from time to time made things easier.

## User Story:

As a business owner I want a web application that will help customers to easily book ride trips to Colorado. They are able to choose a date, time, book in advance and see the price.

## Acceptance Criteria

2. Then you will be taken to our website Mountain Express, where you are shown about the mission of the company and it's service.
3. You can also get an option to login where you can sign up. For this you need to enter your information and once you are done with it you can sign up with your email and password.
4. This will take you to the booking site where you are required to enter you First and Last Name, No. of Passangers, enter one-way or a round trip.
5. If you choose a round trip you will be given option to choose return date as well.
6. After that you can choose your destination which will then lead you the payment page.
7. Once you input your payment method you will get conformaton that your trip is booked.

## Installation:

Inorder to install this application, you need to clone the code into your terminal for the respective repository. You can then install package.json by entering npm init -y, once you are done with that make sure you have the following pakage installed:
"connect-session-sequelize","bcrypt",
"dotenv", "express", "express-handlebars", "express-session","handlebars","mysql2"","sequelize""
"devDependencies" "nodemon","tailwindcss"

You need to enter: "start": "node server.js",
"seed": "node seeds/index.js",
"watch": "nodemon server.js",
"watch-tailwind": "npx tailwindcss -i public/stylesheets/main.css -o public/stylesheets/style.css -w"

    these are basically to run the server.

To install the Node module folder you can enter npm install.

## Usage:

You can follow the steps to run the program:

1. enter npm run watch, which will lead you to http://localhost:3001/
2. Then you will be taken to our website Mountain Express, where you are shown about the mission of the company and it's service.
3. You can also get an option to login where you can sign up. For this you need to enter your information and once you are done with it you can sign up with your email and password.
4. This will take you to the booking site where you are required to enter you First and Last Name, No. of Passangers, enter one-way or a round trip.
5. If you choose a round trip you will be given option to choose return date as well.
6. After that you can choose your destination which will then lead you the payment page.
7. Once you input your payment method you will get conformaton that your trip is booked.

## Technology Used:

Node.js, Inquirer, JavaScript, MySQL, CSS, Html.

## Questions:

If you would like to check our work you can visit at Github rsherpa, https://github.com/rdsherpa/MOUNTAIN-EXPRESS/tree/Riwa
You can also eamil me at sherpariwa@gmail.com.
