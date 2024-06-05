const db = require('../config/db');

function createUser(userData, callBack) {
  const { firstName, lastName, emailAddress, userPassword } = userData;
  const query = "INSERT INTO USERS (first_Name, last_Name, email, userPassword) VALUES (?,?,?,?)";
  console.log(userPassword);

  db.query(query, [firstName, lastName, emailAddress, userPassword], (err, result) => {
    if (err) {
      return callBack(err);
    }
    callBack(null, result);
  });
}

function signInUser(userData, callBack) {
  const { emailAddress, userPassword } = userData;
  const query = "SELECT * FROM users WHERE email = ?";

  db.query(query, [emailAddress], (err, rows) => {
    if (err) {
      console.error("Error checking user existence:", err);
      return callBack(err);
    }

    if (rows.length === 0) {
      return callBack(null, {
        error: true,
        type: "email",
        msg: "Email Address does not exist " 
      });
    }

    const user = rows[0];
    if (userPassword !== user.userPassword) {
      return callBack(null, {
        error: true,
        type: "password",
        msg: "Password is Incorrect"
      });
    }

    callBack(null, { error: false, user });
  });
}

module.exports = { createUser, signInUser };
