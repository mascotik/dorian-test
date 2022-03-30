# Dorian test task

### Description 

The objective of this test is to write a simple login component. It is meant to handle user authentication, registration, and password recovery. A haphazardly thrown-together stand-in component that already handles authentication and registration is provided. You may use it as a starting point, as a reference for the API, or just disregard it completely. You may define additional components if you wish.

You should try to make the finished component look and function like the designs provided in the Figma link below. A PDF with the frames is also linked. Red text should only be visible if a corresponding error has occurred. An ideal implementation would be easy to modify in response to any changes to the design, but most importantly, the component needs to work correctly and handle all relevant state transitions.
Figma:
https://www.figma.com/file/G0yMijOJMWJwt7D360CNWn/Example
PDF:
https://drive.google.com/file/d/1PQLZEsp6f7jjaQdMgw05FSovjmmYWWY7/view?usp=sharing

### Server

[x] Both the react app and the server are defined in the same package file. 
[x] The server can be started with "npm run server" and will be available on port **3001**. 
[x] (You can also run the React app with "npm start") 

When running, the server makes the following REST API routes available:

[x] /api/register - takes email, password, and name, always returns success.
[ ] /api/login - takes email and password, returns user name on success.
[ ] /api/forgot - takes email, returns success if email was found.

[x] All of these routes work via POST method and expect application/json body containing parameters. 
[x] Response is also a JSON object with success set to true or false. 
[ ] Login route also returns user name on success. 
[ ] The /api/forgot route is meant to simulate password recovery flow, but will not send any emails. It will merely check if the user with provided email is registered and return success=false otherwise.

### Example

A Dockerfile that builds a container capable of running the example code is provided. It is merely there for your convenience. Feel free to disregard it if it's not helpful.

Below is a link to the archive with the code.
https://drive.google.com/file/d/1X6OvKyRwt2RMRE-xjf_M6lGYkm3rf-Zc/view?usp=sharing

### Attention 

For a submission, please, provide the source files for your finished component, js and css files, if any, and answer the following questions.
* Are there any changes that you would want made to the design?
* Are there any changes that you would want made to the API?

There is no specific time limit. Please feel free to ask if anything about the directions or the API is not clear.

