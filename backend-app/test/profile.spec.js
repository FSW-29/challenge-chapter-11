const request = require("supertest")
const app = require("../app")

jest.useRealTimers();

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
                    expect(body).toHaveProperty([0])
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
            email: "wawa@mail.com",
            username: "wawa",
            id: "er8gre9re9",
            password: "wawan123",
            total_score: "100",
            city: "Depok",
            biodata: "ini pak wawa",
            social_media: "wawa.com",
            tokenCurrentUser: "er8gre9re9"
        }

        request(app)
            .post("/profile")
            .send(inputUser)
            .end((err, res) => {
                const { status, body } = res

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(200)
                    expect(body).toHaveProperty("message", "Profile Successfully Updated!")
                    done()
                }
            })
    })
})

describe("Failed Edit profile /profile", () => {

    const inputUser = {
        email: "",
        username: "",
        id: "",
        password: "",
        total_score: "",
        city: "",
        biodata: "",
        social_media: "",
        tokenCurrentUser: ""
        }

        test("FAILED EDIT, Empty input from user", done => {
            request(app)
                .post("/profile")
                .send(inputUser)
                .end((err, res) => {
                    const { status, body } = res
    
                    if (err) {
                        expect(status).toBe(400)
                        expect(body).toHaveProperty("message", "Input user is empty")
                        done(err)
                    }else {
                        done()
                    }
                })
        })


})