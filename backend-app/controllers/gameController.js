const { get, getDatabase, ref } = require("firebase/database");
const firebase = require("../services/firebase");

class GameController {

  static async getGame(req, res) {
    try {
      const database = getDatabase();

      // > cari table game dari firebase
      const gamesRef = ref(database, "game");
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

      const lbRef = ref(database, "leaderboard");
      const snapshotLb = await get(lbRef);
      
      // > ambil seluruh data "leaderboard" dari db
      const lb = [];
      snapshotLb.forEach((child) => {
        const childData = child.val();
        lb.push({
          id: child.key,
          ...childData,
        });
      });

      return res.status(200).json({
        "message": "success",
        "statusCode": 200,
        "data_game": games,
        "data_leaderboard": lb,
      });
    } catch (error) {
      return res.status(500).json({ "message": "error detected" });
    }
  }
    static async checkGame(req,res) {
        const {gameId}=req.body;

        if(!gameId){
            return res.status(400).json({
                "message": "game id is empty"
              })
        }else{
            return res.status(200).json({
                "id":"3",
                "desc":"ini deskripsi game",
                "developer":"developergame",
                "name":"Kelereng",
                "image":"kelereng.jpg",
                "src":"www",
                "type":"racing"
            })
        }
    }

    


  

}

module.exports = GameController;

// const getGame = async (req, res) => {
//   try {
//     const database = getDatabase();

//     // > cari table game dari firebase
//     const gamesRef = ref(database, "games");
//     const snapshot = await get(gamesRef);
    

//     // > ambil seluruh data "game" dari db
//     const games = [];
//     snapshot.forEach((child) => {
//       const childData = child.val();
//       games.push({
//         id: child.key,
//         ...childData,
//       });
//     });

//     return res.status(200).json({
//       "message": "success",
//       "statusCode": 200,
//       "data": games,
//     });
//   } catch (error) {
//     return res.status(500).json({ "message": "error detected" });
//   }
// };

// module.exports = {
//   getGame
// }


