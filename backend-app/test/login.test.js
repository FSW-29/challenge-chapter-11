const request = require("supertest")
const app = require("../app")



describe("TEST get login /", () => {
    test("/get data login", done => { 
        request(app)
            .get("/login")
            .end((err, res) => {
                const { status, body } = res

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(200)
                    expect(body).toHaveProperty("message", "success")
                }
                done()
            })
    })
})