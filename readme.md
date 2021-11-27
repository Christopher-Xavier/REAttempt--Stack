
# _{Dragon_Stack}_

#### _{A game to collect and breed dragons.}, {5/11/2020}_

#### By _**{Chris Underwood}**_

## Description

_{A game to collect and breed dragons. This is a fullstack JavaScript application. The front end consists of a signup/sign page, a home page that shows the current generation and account information, an Account Dragons page that lists all of the dragons owned by the logged in account, and Public dragons that are available for purchase or mating. The backend consists of relational database that store all of the dragon and account informtion. Communication is provided to the front end via 3 routes that 13 different apis total.

Dragons have an id, nickname, generation, background color, pattern, build, size, saleValue, sireValue,and isPublic values. There is a dragon avatar based on the physical attributes.

User accounts have dragons, cash balance, and Username. Each user can generate one dragon per generation.

Authenticattion is done with session cookies which have an experation date but can be stored on multiple devices and are persistent through refreshes. The session cookied are also used as the authentication on selected APIs.

}_

## Setup/Installation Requirements

* _Make sure you have Node.js installed globally
* _Clone or fork the files to a file location of your choice
* _Go to the folder/location of the download or where you have moved the files
* _On your terminal go to backend.
* _Run npm i
* _At the root of backend create a folder called secrets with 2 files: databaseConfiguration.js and index.js
* _In databaseConfiguration.js export and object with user, host, database, password, and port based on the pg npm module.
* _In index.js create an app_secret and export it.
* _At the terminal type npm run dev to start the backend server.
* _In your web browser, navigate to localhost:3000/dragon/new to see if the server is running.
* _On a new terminal instance, navigate to frontend
* _Run npm i
* _In the src folder, create a config.js file with an object backend with and an address property with the url to the backend.
* _On the terminal run npm run dev to start the front end server.
* _Navigate to localhost:1234 to see if the frontend is live

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{
  The application works as intended but there are lots of places for improvement. For example the user accounts are not tied to email. The application is not realtime so it is possible one user can purchase a dragon and another still thinks it is available.
}_

## Support and contact details

_{ cunderwoodmn (at) gmail [dot] com}_

## Technologies Used

_{React.js, Node.js, Express.js, redux, react-router, redux-thunk, redux-logger, regenerator-runtime, history, base-64, body-parser, cookie-parser, cors, crypto-js, nodemon, pg, uuid }_

### License

*{MIT License

Copyright (c) [2020] [Chris Underwood]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.}*

Copyright (c) 2020 **_{Chris Underwood}_**
