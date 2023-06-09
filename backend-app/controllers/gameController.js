const { get, getDatabase, ref } = require("firebase/database");
const firebase = require("../services/firebase");

const getGame = async (req, res) => {
  try {
    const database = getDatabase();

    // > cari table game dari firebase
    const gamesRef = ref(database, "games");
    const snapshot = await get(gamesRef);

    // > ambil seluruh data "game" dari db
    const games = [];
    snapshot.forEach((child) => {
      const childData = child.val();
      games.push({
        id: child.key,
        ...childData,
      });
    });

    return res.status(200).json({
      "message": "success",
      "statusCode": 200,
      "data": games,
    });
    //res.json(games.json());
  } catch (error) {
    return res.status(500).json({ "message": "error detected" });
  }
};

module.exports = {
  getGame
}

// class GameController {
//   static async getGame(req, res) {
//     try {
//       res.status(200).json({ message: "success", Game_Name: "Rock" });
//     } catch (error) {
//       res.status(500).json({ message: "error detected" });
//     }
//   }
// }

// module.exports = GameController;
