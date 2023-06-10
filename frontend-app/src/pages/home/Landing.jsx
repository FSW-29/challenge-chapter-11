import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import LandingDefinitionComponent from "../../components/LandingDefinitionComponent";
import CarouselGameListComponent from "../../components/CarouselGameListComponent";

import NavbarMainComponent from '../../components/NavbarMain.component';

const LandingPage = (props) => {
    console.log(props)
    const navigate=useNavigate()

  const [game, setGame] = useState();
//   const [racing, setRacing] = useState();
//   const [puzzle, setPuzzle] = useState();
//   const [action, setAction] = useState();
//   const [gameTypeNew, setGameTypeNew] = useState();
//   const [leaderboard, setLeaderboard] = useState();

  async function getData() {
    const data = await fetch("/api/game/game_list");
    const result = await data.json();
    setGame(result.data);
    manipulationTypeGame(result.data);
  }

  function manipulationTypeGame(dataGame) {
    const typeRacing = [];
    const typePuzzle = [];
    const typeAction = [];
    const typeNew = [];

    dataGame.forEach((element) => {
      if (element.type === "racing") {
        typeRacing.push(element);
      } else if (element.type === "puzzle") {
        typePuzzle.push(element);
      } else if (element.type === "action") {
        typeAction.push(element);
      } else if (element.type === "new") {
        typeNew.push(element);
      }
    });

    // setRacing(typeRacing);
    // setPuzzle(typePuzzle);
    // setAction(typeAction);
    // setGameTypeNew(typeNew);
  }

//   async function getLeaderboard() {
//     const data = await fetch("/api/game/leaderboard");
//     const result = await data.json();
//     // setLeaderboard(result.data);
//   }

  useEffect(() => {
    getData();
    // getLeaderboard();
  }, []);

  useEffect(() => {
    // racing;
    // let dataGameList = gameList(game);
    // let dataGameRacing = gameRacing(racing);
    // let dataGamePuzzle = gamePuzzle(puzzle);
    // let dataGameAction = gameAction(action);
    // let dataGameNew = gameNew(gameTypeNew);
    // let dataLeaderboard = gameLeaderboard(leaderboard);
  }, [game]);

  useEffect(() => {
    // cekToken();
    
    // console.log(database,'===> isi get database')
    // console.log(authFirebase, '===> isi getAuth')
    // console.log(userId,'===> isi auth current user uid')
  }, []);

    // let userNum=null;

  // const cekToken = () => {
  //   if (!localStorage.getItem("token")) {
  //     const tokenLocal = localStorage.getItem("token");
  //     console.log(tokenLocal, "masuk ga ya");
  //     navigate("/login");
  //     //navigate("/login");
  //   }
  // };

  const navigateToGameList = () => {
    navigate("/GameList");
  };

  return (
    <>
      {/* <NavbarHomeComponent propsPutUsername={props.propsSetUsername} /> */}
      <NavbarMainComponent />
      {/* <LandingCarouselComponent />*/}
      <section className="h-100 bg-dark pt-3 text-center">
        <CarouselGameListComponent />
        {/* <LandingDefinitionComponent /> */}
        {/* <GameListByCategoryComponent
          propsCategory={"Top"}
          propsHandleGame={racing}
        /> */}
        <button
          type="button"
          className="btn btn-outline-light mb-5"
          onClick={navigateToGameList}
        >
          VIEW MORE
        </button>
      </section>
    </>
  );
};

export default LandingPage;

// import React, { useEffect, useState } from 'react';
// import NavbarMainComponent from '../../components/NavbarMain.component';
// // import { useDispatch, useSelector } from "react-redux";


// export default function HomePage(){


//     const [validLogin, setValidLogin]=useState()
//     useEffect(() =>{
//         cekToken();
        
//     },[])

//     const cekToken = () =>{
//         if (localStorage.getItem("token")) {
//             setValidLogin("Valid");
//           }
//     }

//     return(
//         <>

//             {
//                 validLogin ? (
//                     <>
//                         <h1>User already login, display Homepage</h1>
//                     </>
//                 ) : (
//                     <>
//                         <h2>User doesnt login, display landingPage</h2>
//                     </>
//                 )
//             }
//             <NavbarMainComponent />
//             <h1> Welcome to Home</h1>
//         </>

//     )
// }
