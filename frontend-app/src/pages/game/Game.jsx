import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
//import Head from "next/head";
//import axios from 'axios';
import NavbarMainComponent from '../../components/NavbarMain.component';
import CarouselGameListComponent from '../../components/CarouselGameListComponent';
import GameListByCategoryComponent from '../../components/GameListByCategoryComponents';

//const base_url = "http://localhost:8000/";

export default function GamePage(){
    const dataGame = useSelector((state) => state.gameReducer);
    const gameRacing = dataGame.gameListRacing;
    const gamePuzzle = dataGame.gameListPuzzle;
    const gameAction = dataGame.gameListAction;
    const gameNew = dataGame.gameListNew;

    useEffect(() => {
        gameNew;
        gameRacing;
        gamePuzzle;
        gameAction;

        // console.log(gameNew, "==============> gameNew");
        // console.log(gameRacing, "==============> gameRacing");
        // console.log(gamePuzzle, "==============> gamePuzzle");
        // console.log(gameAction, "==============> gameAction");
    }, []);


    return(
        <>
        {/* <Head>
            <title>Game List</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head> */}
        <NavbarMainComponent />
        <section className="h-100 bg-dark pt-3">
        <h1 className="text-white">Welcome to Game</h1>
            <CarouselGameListComponent />
            <div className="container w-100 mt-5">
            <GameListByCategoryComponent
                propsCategory={"New"}
                propsHandleGame={gameNew}
            />

            <GameListByCategoryComponent
                propsCategory={"Racing"}
                propsHandleGame={gameRacing}
            />

            <GameListByCategoryComponent
                propsCategory={"Puzzle"}
                propsHandleGame={gamePuzzle}
            />

            <GameListByCategoryComponent
                propsCategory={"Action"}
                propsHandleGame={gameAction}
            />
            </div>
        </section>
    </>
    )
}

