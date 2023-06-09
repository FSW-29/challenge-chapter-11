import React, { useEffect} from "react";
import { useSelector } from "react-redux";
//import { useRouter } from "next/router";

//import Head from "next/head";

//import NavbarHome from "@/components/NavbarHome";
//import GameSuitComponent from "@/components/GameSuitComponent";
import NavbarMainComponent from '../../components/NavbarMain.component';

// import { useDispatch } from "react-redux";
// import { gameDetail } from "@/redux/actions/game.action";

export default function GameDetail() {
  //let frame;
  const dataGame = useSelector((state) => state.gameReducer);
  const gameDataDetail = dataGame.gameDetail;
  const gameLeaderboard = dataGame.gameLeaderboard;

  // const router = useRouter();
  // const dispatch = useDispatch();

  function compare(a, b) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  }

  const capitalize = (str) => {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1);
  };

  // function frameGame() {
  //   if (gameDataDetail[0].type === "new") {
  //     setFrame(
  //       <>
  //         <GameSuitComponent />
  //       </>
  //     );
  //   } else {
  //     setFrame(
  //       <iframe
  //         className=" rounded-4"
  //         title={gameDataDetail[0].name}
  //         src={gameDataDetail[0].src}
  //         style={{ width: "95%", height: "700px" }}
  //         frameBorder="0"
  //         allow="gamepad *;"
  //       ></iframe>
  //     );
  //   }
  // }

  useEffect(() => {
    gameDataDetail;
    console.log(gameDataDetail, "=============> game data detail");
    gameLeaderboard;
  }, []);

  return (
    <>
      {/* <Head>
        <title>Game Detail</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <NavbarMainComponent />
      <section className="h-100 bg-dark pt-3">
        <div className="text-center">
          {gameDataDetail[0]?.type === "new" ? (
            <>
            <h1>game suit</h1>
              {/* <GameSuitComponent /> */}
            </>
          ) : (
            <iframe
              className=" rounded-4"
              title={gameDataDetail[0]?.name}
              src={gameDataDetail[0]?.src}
              style={{ width: "95%", height: "700px" }}
              frameBorder="0"
              allow="gamepad *;"
            ></iframe>
          )}
        </div>
        <div>
          <div className="row align-items-start pb-3 text-light">
            <div className="col-6">
              <div className="pt-3 ps-5 fs-4 ">
                <h1>{gameDataDetail[0]?.name}</h1>
                <table>
                  <tr>
                    <td>Developer</td>
                    <td>:</td>
                    <td></td>
                    <td>{gameDataDetail[0]?.developer}</td>
                  </tr>
                  <tr>
                    <td>Platform</td>
                    <td>:</td>
                    <td></td>
                    <td>{gameDataDetail[0]?.platform}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>:</td>
                    <td></td>
                    {console.log(gameDataDetail[0]?.type)}
                    <td>{capitalize(gameDataDetail[0]?.type)}</td>
                  </tr>
                </table>
                <br />
                <p>{gameDataDetail[0]?.desc}</p>
              </div>
            </div>
            <div className="col-6 text-center pt-4 pe-5">
              <h1>LEADERBOARD</h1>
              <table className="table table-striped table-dark fw-bold fs-5 mt-5 ">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {gameLeaderboard?.sort(compare).map((el, idx) => (
                    <tr key={el.id}>
                      <td>{idx + 1}</td>
                      <td>{el.name}</td>
                      <td>{el.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
