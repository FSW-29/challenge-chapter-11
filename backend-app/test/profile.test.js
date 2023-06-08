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
                }
                done()
            })
    })
})