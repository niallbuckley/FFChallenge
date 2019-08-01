# FFChallenge

## Freight Farms coding assignment

I was asked to demonstrate a basic "hello world" program using Node.js and react

I used Node.js express for server side programming of the application and react for client side programming.
I created a Node server with a simple JSON api for the react client to GET "hello world" and diplay it as the websites heading.

The app contains:

- A very basic unit test is carried out on the webpage to ensure both the API and front-end is running, tested using chai library. (npm install mocha chai --save-dev)
- Conducted elint linting tests on static code to ensure programming conventions and good practices were met and automatically fixed any imperfections. First (npm install --save eslint-config-defaults) (npm install eslint --save-dev) 
(npm run eslint) then to automatically fix (npm eslint -fix) is run on each program to ensure google standards are met.

The application can be run after installation using npm start to run the server, then cd client and npm run to start the client. 
Once client and server is running, npm test both backend and frontend to ensure there are no bugs and if there are, it's easy to identify where it has occured.

For scalability, I tested the application using two http benchmark tools: loadtest and siege.
My attempt to test the app can be found here: https://github.com/niallbuckley/FFScalability
