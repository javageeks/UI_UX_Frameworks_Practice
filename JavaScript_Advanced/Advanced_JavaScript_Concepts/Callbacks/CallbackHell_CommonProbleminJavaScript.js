// CALLBACK HELL
// function to fetch details of user in Student Management System
// const fetchUserDetails = (username, password, callback) => {
//     database.authenticateUser(username, password, (error, userInfo) => {
//         if (error) {
//             callback(error);
//         } else {
//             database.getRoles(userInfo, (error, rolesInfo) => {
//                 if (error) {
//                     callback(error);
//                 } else {
//                     database.getPermissions(rolesInfo, (error, permissionsInfo) => {
//                         if (error) {
//                             callback(error);
//                         } else {
//                             callback(null, userInfo, rolesInfo, permissionsInfo);
//                         }
//                     });
//                 }
//             });
//         }
//     });
// }

// const callback = (error, userInfo, rolesInfo, permissionsInfo) => {
//     // some code here
// }

//Q Validate Username & Password using Callbacks

// Description
// You need to mock the functionality of a server which checks for a valid username and password input by the user.
 
 
// Initially, the username is entered by the user. Note that the user is not actually giving any input. You can simply define a variable and set the username to any value inside the setTimeout() function. After getting the username, it is validated. Note that a username is valid when it is neither undefined nor null nor an empty string. If the username is valid, a message “Valid UserName!” is printed on the console. If the username is not valid, the message “Invalid UserName! Please try again!” is printed on the console and the program ends there. 
 
// After validating username, the password is entered by the user. Again, the password is not actually entered by the user. You just need to mock the functionality of it being input from the user and you can simply initialize a variable with the password value. After getting the password, it is validated. Note that a password is valid when it is neither undefined nor null nor an empty string. If the password is valid, a message “Valid Password!” is printed on the console. If the password is not valid, the message “Invalid Password! Please try again!” is printed on the console and the program ends there. 
 
// If both the username as well the password is valid, then a message “BOTH VALID!” is printed on the console at the end and the program terminates then.
 
// Output:
// For username “srishti” and password “upgrad”, the messages to be printed on the console are given in the following screenshot:



/**
 * Function to get the username from the database
 * @param {*} callback function to be called after getting the username (validateUsername() function)
 */
const getUsername = (callback) => {
    console.log("Getting username...");
    // code to get the username
    setTimeout(() => {
        const username = "srishti";
        console.log("Username = " + username);
        callback(username);
    }, 3000);
}

/**
 * Function to validate the username
 * @param {*} username the username which is to be checked as valid or invalid
 * @param {*} callback function to be called if the username is valid
 */
const validateUsername = (username, callback) => {
    console.log("Validating username...");
        // if the username is not undefined or null or empty string, call the getPassword() function
        if (username !== undefined && username !== null && username !== "") {
            console.log("Valid Username!");
            callback();
        } else {
            console.log("Invalid Username! Please try again!");
        }
}

/**
 * Function to get the password from the database
 * @param {*} callback function to be called after getting the password (validatePassword() function)
 */
const getPassword = (callback) => {
    console.log("Getting password...");
    // code to get the password
    setTimeout(() => {
        const password = "upgrad";
        console.log("Password = " + password);
        callback(password);
    }, 3000);
}

/**
 * Function to validate the password
 * @param {*} password the password which is to be checked as valid or invalid
 * @param {*} callback function to be called if the password is valid
 */
const validatePassword = (password, callback) => {
    console.log("Validating password...");
        // if the password is not undefined or null or empty string, call the done() function
        if (password !== undefined || password !== null || password !== "") {
            console.log("Valid Password!");
            callback();
        } else {
            console.log("Invalid Password! Please try again!");
        }
}

/**
 * Function which is called when both the username as well as password are valid
 */
const done = () => {
    console.log("BOTH VALID!");
}

/**
 * Function for logging into a website
 * CALLBACK HELL
 */
const login = () => {
    getUsername((username) => {
        validateUsername(username, () => {
            getPassword((password) => {
                validatePassword(password, () => {
                    done();
                });
            });
        });
    });
}

login();


