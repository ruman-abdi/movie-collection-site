# Getting Started with Create React App

Movie App
This is a web application built with React, hooks, and axios that allows users to search for movies using the OMDb API and displays the results on the screen.

Getting Started
To get started with this project, follow these steps:

Clone this repository to your local machine.

Navigate to the root directory of the project in your terminal.

Run npm install to install the necessary dependencies.

Obtain an API key from the OMDb API website.

Create a file called .env in the root directory of the project, and add the following line to it:

javascript
Copy code
REACT_APP_API_KEY=<your api key>
Replace <your api key> with the actual API key you obtained in step 4.

Run npm start to start the development server.

Usage
Once the development server is running, you can access the application by navigating to http://localhost:3000 in your web browser. The application consists of a search bar where users can enter the name of a movie they want to search for.

When the user submits a search query, the application sends a request to the OMDb API to fetch information about the movie. If the movie is found, the application displays its title, year of release, plot summary, and poster image. If the movie is not found, the application displays an error message saying "Movie not found."





