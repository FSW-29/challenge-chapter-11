const request = require("supertest")
const app = require("../app")



describe("TEST get game /", () => {
    test("/get data game", done => { 
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
})