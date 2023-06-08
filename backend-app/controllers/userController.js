class UserController { 
    
    static async getLogin(req, res) {
        try {
            res.status(200).json({ message: "success"})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async login(req, res) {
        if (req.body === undefined || Object.keys(req.body).length === 0) {
            throw new Error( res.status(400).json({ 
                "message": "Something wrong, please input fields",
                "timestamp": `${new Date()}`,
                "path": "/api/v1/login"
              }));
            // res.status(400).json({ 
            //   "message": "Something wrong, please input fields",
            //   "timestamp": `${new Date()}`,
            //   "path": "/api/v1/login"
            // });
        }

        try {
            res.status(200).json({
                "access_token": "2960c13ca36a042bbac894b6a699302a",
                "serial": "a7c4d9e2f913aff032ed0b5211fd2773590b1ac35e1a9f41ca048ac4076c44fcd670e46312c0c659eb954d7905fd9f5148a8ec6393a1af17cfc1344445256df4",
                "locked": true
            });
        } catch (error) {
            // console.info(error, '=> errornya');
            return error;
        }
    }

}


module.exports = UserController