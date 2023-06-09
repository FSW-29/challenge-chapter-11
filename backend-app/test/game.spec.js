const request = require("supertest")
const app = require("../app")


//success get data 
describe("TEST get game /", () => {
    //SUCCESS GET DATA GAME
    test("/get data game success", done => { 
        request(app)
            .get("/game")
            .end((err, res) => {
                const { status, body } = res

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(200)
                    expect(body).toHaveProperty("Game_Name", "Rock")
                }
                done()
            })
    })

    //FAILED GET DATA GAME
    test("/get data game failed", done => { 
        request(app)
            .get("/game")
            .end((err, res) => {
                const { status, body } = res

                if (err) {
                    expect(status).toBe(500)
                    expect(body).toHaveProperty("message", "error detected")
                    done(err)
                }else {
                    done()
                }
                
            })
    })
})
