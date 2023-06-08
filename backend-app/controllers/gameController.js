class GameController { 
    
    static async getGame(req, res) {
        try {
            res.status(200).json({ "message": "success",
                                    "Game_Name": "Rock"})
        } catch (error) {
            res.status(500).json({"message": "error detected"})
        }
    }

    

}


module.exports = GameController