import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import LandingDefinitionComponent from "../../components/LandingDefinitionComponent";
import CarouselGameListComponent from "../../components/CarouselGameListComponent";

import NavbarMainComponent from '../../components/NavbarMain.component';

import axios from 'axios';
import { useDispatch } from "react-redux";
import {
    gameList,
    gameRacing,
    gamePuzzle,
    gameAction,
    gameNew,
    gameLeaderboard
} from "../../redux/actions/game.action"

// export default function HomePage(){

const HomePage = (props) => {
    console.log(props)
    const base_url = "http://localhost:8000/";
    const navigate=useNavigate()
    const dispatch = useDispatch();

    const [game, setGame] = useState();
    const [racing, setRacing] = useState();
    const [puzzle, setPuzzle] = useState();
    const [action, setAction] = useState();
    const [gameTypeNew, setGameTypeNew] = useState();
    const [leaderboard, setLeaderboard] = useState();

    const getDataGame = async() =>{
        const response = await axios.get(`${base_url}game`);
        const dataGame = response.data.data_game;
        const dataLeaderboard = response.data.data_leaderboard
        setGame(dataGame);
        setLeaderboard(dataLeaderboard);
        manipulationTypeGame(response.data.data_game)
        //console.log(game, "======> ini responses")
    }

    function manipulationTypeGame(dataGame) {
        const typeRacing = [];
        const typePuzzle = [];
        const typeAction = [];
        const typeNew = [];

        // const cekToken = () =>{
        // if (localStorage.getItem("token")) {
        //     setValidLogin("Valid");
        // }

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

        setRacing(typeRacing);
        setPuzzle(typePuzzle);
        setAction(typeAction);
        setGameTypeNew(typeNew);
    }
    
    useEffect(() => {
        getDataGame();
    }, []);

    useEffect(() => {
        racing;
        const dataGameList = gameList(game);
        const dataGameRacing = gameRacing(racing);
        const dataGamePuzzle = gamePuzzle(puzzle);
        const dataGameAction = gameAction(action);
        const dataGameNew = gameNew(gameTypeNew);
        const dataLeaderboard = gameLeaderboard(leaderboard);
        console.log(dataLeaderboard, "===============> dataLeaderboard");

        dispatch(dataGameList);
        dispatch(dataGameRacing);
        dispatch(dataGamePuzzle);
        dispatch(dataGameAction);
        dispatch(dataGameNew);
        dispatch(dataLeaderboard);
    }, [game]);


    useEffect(() => {
        cekToken();
        
        // console.log(database,'===> isi get database')
        // console.log(authFirebase, '===> isi getAuth')
        // console.log(userId,'===> isi auth current user uid')
    }, []);

    // let userNum=null;

    const cekToken = () => {
        if (!localStorage.getItem("token")) {
        const tokenLocal = localStorage.getItem("token");
        console.log(tokenLocal, "masuk ga ya");
        navigate("/login");
        //navigate("/login");

        }
    };

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

export default HomePage;

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
