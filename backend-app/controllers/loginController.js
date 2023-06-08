const { get, getDatabase, ref } = require('firebase/database');
const firebase = require('../services/firebase');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      "message": "Email or Password Can't Empty"
    })
  }

  try {
    const database = getDatabase();

    const usersRef = ref(database, "users");
    const snapshot = await get(usersRef);

    const users = [];
    snapshot.forEach((child) => {
      const childData = child.val();
      users.push({
        id: child.key,
        ...childData
      });
    });

    const isEmailExists = users.find((user) => user.email === email);
    const isPasswordExists = users.find((user) => user.password === password);

    if (isEmailExists) {
      if (isPasswordExists) {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;

        return res.status(200).json({
          "message": "Login Success",
          "data": user,
          "profile": isEmailExists
        });
      } else {
        return res.status(400).json({
          "message": "Wrong Password!"
        });
      }
    } else {
      return res.status(400).json({
        "message": "Email is Not Found!"
      });
    }
  } catch (error) {
    return res.status(400).json({
      "message": `Something Error: ${error.message}`,
    });
  }
};

module.exports = {
  login
}