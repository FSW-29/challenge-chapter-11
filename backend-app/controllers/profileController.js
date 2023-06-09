import { ref, get, child, getDatabase, update } from "firebase/database";
const firebase = require('../services/firebase');


const getProfile = async (req,res) =>{
    try{

        const database = getDatabase(firebase);
        const databaseFirebase = await get(child(ref(database), "users"));
        let cekData = Object.values(databaseFirebase.val());
    
    
        res.json(cekData)
    
        }catch(err){
            console.log(err,"MASUK ERROR")
        }
}

module.exports = {
    getProfile
  }
  

// class ProfileController { 
    
//     static async getProfile(req, res) {
//         try {
//             res.status(200).json({ "message": "success",
//                                     "username": "exist",
//                                     "email": "exist@gmail.com"})
//         } catch (error) {
//             res.status(500).json(error)
//         }
//     }

//     static async editProfile(req,res) {
//         if(req.body === undefined || Object.keys(req.body).length === 0 ){
//             throw new Error( res.status(400).json({ 
//                 "message": "Something wrong, you didnt input anything to edit",
//                 "timestamp": `${new Date()}`,
//                 "path": "/profile"
//               }));
//         }
//         try {
//             res.status(200).json({
//                 "token": "2960c13ca36a042bbac894b6a699302a",
//                 "message": "edit Success",
//                 "locked": true
//             });
//         } catch (error) {
//             // console.info(error, '=> errornya');
//             return error;
//         }
//     }
// }


// module.exports = ProfileController