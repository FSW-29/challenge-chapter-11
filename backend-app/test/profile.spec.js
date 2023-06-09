const request = require("supertest")
const app = require("../app")

describe("TEST get profile /", () => {
    test("/get data profile", done => { 
        request(app)
            .get("/profile")
            .end((err, res) => {
                const { status, body } = res

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(200)
                    expect(body).toHaveProperty("username", "exist")
                    expect(body).toHaveProperty("email", "exist@gmail.com")
                    done()
                }
                
            })
    })
})

// Edit Profile Success
describe("SUCCESED Edit profile /profile", () => {
    /**
    * NOTE: Dibaca dulu keterangan testnya, setelah itu diisi sendiri request body yang udah dibuatin divariable masing-masing
    * REQ.BODY isi sendiri yaa sesuai type data yg ada di folder "/models", validatenya juga dicek yaa
    */

    test("SUCCESED Edit Profile, RESPONSE WITH message and token of user that edit it", done => {
        
        const inputUser = {
            username: "Budi",
            biodata: "Hello world",
            city: "Jakarta",
            social_media: "budipekerti",
        }

        request(app)
            .post("/profile")
            .send(inputUser)
            .end((err, res) => {
                const { status, body } = res
                access_token = res.body.access_token
                const locked = res.body.locked

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(200)
                    expect(body).toHaveProperty("token", expect.any(String))
                    expect(body).toHaveProperty("message", "edit Success")
                    expect(locked).toBeTruthy();
                    done()
                }
            })
    })
})

describe("Failed Edit profile /profile", () => {

    const inputUser = {
            username: "",
            biodata: "",
            city: "",
            social_media: "",
        }

        test("FAILED EDIT, Empty input from user", done => {
            request(app)
                .post("/profile")
                .send(inputUser)
                .end((err, res) => {
                    const { status, body } = res
                    const timestamp = body.timestamp
    
                    if (err) {
                        expect(status).toBe(400)
                        expect(body).toHaveProperty("message", "Something wrong, you didnt input anything to edit")
                        expect(body).toHaveProperty('timestamp', expect.any(String))
                        expect(body).toHaveProperty('path', expect.any(String))
                        expect(new Date(timestamp)).toBeInstanceOf(Date);
                        done(err)
                    }else {
                        done()
                    }
                })
        })


})