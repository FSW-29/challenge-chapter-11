const { ref, get, child, getDatabase, update } = require('firebase/database');
const firebase = require('../services/firebase');
// const {getStorage, ref : refStorage, uploadBytesResumable, getDownloadURL} = require('firebase/storage');


let userNum=null;

// let tokenFromClient=null;

// const setToken = async (req,res) =>{
//     try{
//         const tokenCurrentUser = req.body;
//         tokenFromClient= tokenCurrentUser.token;

//         console.log(tokenFromClient,"==> ini isi token From Client")
//     }catch(err){
//         console.log(err, "masuk error setToken")
//     }
// }

const getProfile = async (req,res) =>{
        const database = getDatabase();
        const databaseFirebase = await get(child(ref(database), "users"));
        const cekData = Object.values(databaseFirebase.val());
        res.status(200).json(cekData)    
}

// const getProfilePicture = async (req,res) =>{
//     const { tokenCurrentUser } = req.body;
//     console.log(tokenCurrentUser,"ini token di get Profile")

//     try{
//         const storage=getStorage(firebase);
//         const downloadURL=await getDownloadURL(refStorage(storage, `profile/${tokenCurrentUser}`))
//         return res.status(200).json({"downloadURL":downloadURL})

//     }catch(err){
//         console.log(err)
//     }
// }

// const updateProfilePicture = async (req,res) => {
//     const fileUser = req.body;
//     console.log(fileUser, "==> ini file user backend updateProfilePicture")
//     console.log(tokenFromClient,"===> ini token yang disimpan server")
//     try{
//         const storage=getStorage(firebase);

//         const storageRef=refStorage(storage, `profile/${tokenFromClient}`)

//         uploadBytesResumable(storageRef, fileUser)

//         return res.status(200).json({"message":"Profile picture updated"})

//     }catch(err){
//         console.log(err)
//         return res.status(400).json({"messaged":"Profile picture failed to update"})
//     }
// }

const editProfile = async(req,res) =>{
    const inputUser = req.body;
    // console.log(inputUser,"==> ini isi inputuser");
    if(!inputUser){
        return res.status(400).json({
            "message": "Input user is empty"
          })
    }
        const database = getDatabase();
        const databaseFirebase = await get(child(ref(database), "users"));
        const cekData = Object.values(databaseFirebase.val());

        //looping untuk pencarian data user yang sesuai dengan uid
        for (let i = 0; i < cekData.length; i++) {
            //kondisinal untuk mengambil index array yang sesuai dengan uid
                if (cekData[i].id === inputUser.tokenCurrentUser) {
                    userNum = i;
                }
            }
            //ambil data /users menjadi kumpulan object of object
            const collectionObject = databaseFirebase.val();
            //penampung untuk mengecek looping ke berapa
            let temp = 0;
            //penampung index /users/tempProperty dari firebase
            let tempProperty;

            //looping obbject in object
            for (const property in collectionObject) {
                //kondisional buat pengecek apakah looping sudah sesuai dengan index array
                if (temp === userNum) {
                    tempProperty = property;
                }
                temp++;
            } 
            
            const updates = {};
            updates["/users/" + tempProperty] = inputUser;
            update(ref(database), updates);

            return res.status(200).json({"message": "Profile Successfully Updated!"})

}

module.exports = {
    getProfile,
    // getProfilePicture,
    // updateProfilePicture,
    editProfile,
    // setToken
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