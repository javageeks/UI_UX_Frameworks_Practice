// CALLBACK HELL
// function to fetch details of user in Student Management System
const fetchUserDetails = (username, password, callback) => {
    database.authenticateUser(username, password, (error, userInfo) => {
        if (error) {
            callback(error);
        } else {
            database.getRoles(userInfo, (error, rolesInfo) => {
                if (error) {
                    callback(error);
                } else {
                    database.getPermissions(rolesInfo, (error, permissionsInfo) => {
                        if (error) {
                            callback(error);
                        } else {
                            callback(null, userInfo, rolesInfo, permissionsInfo);
                        }
                    });
                }
            });
        }
    });
}

const callback = (error, userInfo, rolesInfo, permissionsInfo) => {
    // some code here
}


// USING PROMISES
// function to fetch details of user in Student Management System
const fetchUserDetails1 = (username, password) => {
    database.authenticateUser(username, password)
        .then(userInfo => dataBase.getRoles(userInfo))
        .then(rolesInfo => dataBase.getPermissions(rolesInfo))
        .then(permissionsInfo => {
            // code written inside the function named 'callback'
        })
        .catch((err) => {
            // code to handle error
        });
};

//Q Validate Username & Password using Promises
// Description
// This is the same question that you have looked earlier in the segment on 'Callback Hell'. This is the validator which takes the username, check for its validity and prints the message accordingly. Then, it takes the password, check for its validity and prints the message accordingly. 

// You are required to write the code using promises.
 
// Example:
// For username “srishti” and password “upgrad”, the messages to be printed on the console are as follows:

// Getting username...
// Username = srishti
// Validating username...
// Valid Username!
// Getting password...
// Password = upgrad
// Validating password...
// Valid Password!
// BOTH VALID


/**
 * Function to get the username from the database
 * @param {*} callback function to be called after getting the username (validateUsername() function)
 */
// const getUsername = (callback) => {
//     console.log("Getting username...");
//     // code to get the username
//     setTimeout(() => {
//         const username = "srishti";
//         console.log("Username = " + username);
//         callback(username);
//     }, 3000);
// }


const getUsername = new Promise((resolve, reject) => {
    console.log("Getting username...");
    // code to get the username
    setTimeout(() => {
        const username = "srishti";
        console.log("Username = " + username);
        resolve(username);
    }, 3000);
});
/**
 * Function to validate the username
 * @param {*} username the username which is to be checked as valid or invalid
 * @param {*} callback function to be called if the username is valid
 */
// const validateUsername = (username, callback) => {
//     console.log("Validating username...");
//         // if the username is not undefined or null or empty string, call the getPassword() function
//         if (username !== undefined && username !== null && username !== "") {
//             console.log("Valid Username!");
//             callback();
//         } else {
//             console.log("Invalid Username! Please try again!");
//         }
// }

const validateUsername = (username) => {
    return new Promise((resolve, reject) => {
        console.log("Validating username...");
        // if the username is not undefined or null or empty string, call the getPassword() function
        if (username !== undefined && username !== null && username !== "") {
            console.log("Valid Username!");
            resolve();
        } else {
            reject("Invalid Username! Please try again!");
        }
    });
}

/**
 * Function to get the password from the database
 * @param {*} callback function to be called after getting the password (validatePassword() function)
 */
// const getPassword = (callback) => {
//     console.log("Getting password...");
//     // code to get the password
//     setTimeout(() => {
//         const password = "upgrad";
//         console.log("Password = " + password);
//         callback(password);
//     }, 3000);
// }

const getPassword = () => {
    return new Promise((resolve, reject) => {
        console.log("Getting password...");
        // code to get the password
        setTimeout(() => {
            const password = "upgrad";
            console.log("Password = " + password);
            resolve(password);
        }, 3000);
    });
}
/**
 * Function to validate the password
 * @param {*} password the password which is to be checked as valid or invalid
 * @param {*} callback function to be called if the password is valid
 */
// const validatePassword = (password, callback) => {
//     console.log("Validating password...");
//         // if the password is not undefined or null or empty string, call the done() function
//         if (password !== undefined || password !== null || password !== "") {
//             console.log("Valid Password!");
//             callback();
//         } else {
//             console.log("Invalid Password! Please try again!");
//         }
// }

const validatePassword = (password) => {
    return new Promise((resolve, reject) => {
        console.log("Validating password...");
        // if the password is not undefined or null or empty string, call the done() function
        if (password !== undefined || password !== null || password !== "") {
            console.log("Valid Password!");
            resolve();
        } else {
            reject("Invalid Password! Please try again!");
        }
    });
}
/**
 * Function which is called when both the username as well as password are valid
 */
// const done = () => {
//     console.log("BOTH VALID!");
// }
const done = () => {
    console.log("BOTH VALID");
};

/**
 * Function for logging into a website
 * CALLBACK HELL
 */
// const login = () => {
//     getUsername((username) => {
//         validateUsername(username, () => {
//             getPassword((password) => {
//                 validatePassword(password, () => {
//                     done();
//                 });
//             });
//         });
//     });
// }

// login();

const login = () => {
    getUsername.then((username) => {
        return validateUsername(username);
    }, (error) => {
        console.log(new Error(error));
    }).then(() => {
        return getPassword();
    }, (error) => {
        console.log(new Error(error));
    }).then((password) => {
        return validatePassword(password);
    }, (error) => {
        console.log(new Error(error));
    }).then(() => {
        return done();
    }, (error) => {
        console.log(new Error(error));
    });
};

login();


