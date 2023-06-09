class GameController { 
    
    static async getGame(req, res) {
        try {
            res.status(200).json({ "message": "success",
                                    "Game_Name": "Rock"})
        } catch (error) {
            res.status(500).json({"message": "error detected"})
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


module.exports = GameController