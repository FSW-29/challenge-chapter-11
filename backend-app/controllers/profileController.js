class ProfileController { 
    
    static async getProfile(req, res) {
        try {
            res.status(200).json({ "message": "success",
                                    "username": "exist",
                                    "email": "exist@gmail.com"})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    

}


module.exports = ProfileController