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
                    expect(body).toHaveProperty("message", "success")
                    expect(body).toHaveProperty("data_game")
                    expect(body).toHaveProperty("data_leaderboard")
                }
                done()
            })
    })

})

describe("Test check game /", () =>{
    //success get data game
    test("/post check game success", done => {
        
        const userChoose={
            gameId: "4"
        }

        request(app)
            .post('/game')
            .send(userChoose)
            .end((err,res) =>{
                const { status, body } = res

                if(err){
                    done(err)
                }else{
                    expect(status).toBe(200)
                    expect(body).toHaveProperty("id", expect.any(String))
                    expect(body).toHaveProperty("desc", expect.any(String))
                    expect(body).toHaveProperty("developer", expect.any(String))
                    expect(body).toHaveProperty("name", expect.any(String))
                    expect(body).toHaveProperty("image", expect.any(String))
                    expect(body).toHaveProperty("src", expect.any(String))
                    expect(body).toHaveProperty("type", expect.any(String))
                    done();
                }
            })
    })

    test("/post check game failed", done =>{

        const userChoose={
            gameId: ""
        }
        request(app)
            .post('/game')
            .send(userChoose)
            .end((err,res) =>{
                const { status, body } = res

                if(err){
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", expect.any(String))
                    done(err)
                }else{
                    done()
                }
            })

    })
})
