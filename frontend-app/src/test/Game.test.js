import { render, screen } from '@testing-library/react';
import Game from "../pages/game/Game.jsx"
import ServerError from '../pages/notfound/serverError.jsx';
import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "..";

let listGame;


//eslint-disable-next-line
describe("TEST gamepage /", () => {
//eslint-disable-next-line
    test("render gamepage", done => {
        render(
                <Provider store={ store }>
                    <MemoryRouter>
                        <Game />
                    </MemoryRouter>
                </Provider>
            );
        const linkElement= screen.getByText(/Welcome to Game/i);
        //eslint-disable-next-line
        expect(linkElement).toBeInTheDocument();
        done()

    })

    test ('game list error', done =>{
        if(!listGame){
            render(<ServerError/>)
            const linkElement= screen.getByText(/Server Error/i);
            expect(linkElement).toBeInTheDocument();
            done()
        }else{
            done()
        } 
    })
})