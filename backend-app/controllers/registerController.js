const { get, getDatabase, push, ref } = require('firebase/database')
const firebase = require('../services/firebase');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');

const registerUser = async (req, res) => {
  const {
    email,
    username,
    password,
    biodata,
    city,
    socialMedia
  } = req.body

  if (!email || !username || !password || !biodata || !city || !socialMedia) {
    return res.status(400).json({
      "message": "Body Can't Not Empty!"
    });
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

    const usernameExists = users.find((user) => {
      return user.username === username;
    });
    const emailExists = users.find((user) => {
      return user.email === email
    });

    if (emailExists) {
      return res.status(400).json({
        "message": "Email has been used!"
      });
    }

    if (usernameExists) {
      return res.status(400).json({
        "message": "Email has been used!"
      });
    }

    const auth = getAuth();
    const createNewUser = await createUserWithEmailAndPassword(auth, email, password);

    // > simpan dalam database
    const dataRef = ref(database, "users");
    await push(dataRef, {
      id: createNewUser.user.uid,
      email: email,
      username: username,
      password: password,
      total_score: 0,
      biodata: biodata,
      city: city,
      social_media: socialMedia
    });

    const data = {
      id: createNewUser.user.uid,
      email: email,
      username: username,
      password: password,
      biodata: biodata,
      city: city,
      socialMedia: socialMedia
    }
    
    return res.status(200).json({
      "message": "Register Successfully!",
      "data": data
    });
  } catch (error) {
    return res.status(400).json({
      message: `Something Error: ${error.message}`
    });
  }
};

module.exports = {
  registerUser
};