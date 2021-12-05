const Backendless = require('backendless');

Backendless.serverURL = "https://eu-api.backendless.com";
Backendless.initApp("2431C311-F65C-5509-FF07-EBD7CFA6C200", "6DE96EA5-41B6-48CA-89F1-7D1C3733E89A");


function userRegistered(user) {
    console.log('user has been registered')
}

function gotError(error) {
    console.log(`error message: ${error.message}`);
    console.log(`error code: ${error.statusCode}`);
}

function userLoggedIn(user) {
    console.log('user has logged in');
}

function userLoggedOut() {
    console.log('user has been logged out');
}

export {
    userLoggedIn,
    userLoggedOut,
    userRegistered,
    gotError,
}