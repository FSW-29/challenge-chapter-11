import { render, screen } from '@testing-library/react';
import GamePage from "../pages/game/Game.jsx"
import React from 'react';


//eslint-disable-next-line
describe("TEST gamepage /", () => {
//eslint-disable-next-line
    test("render gamepage", done => {
        render(<GamePage />);
        const linkElement= screen.getByText(/Welcome to Game/i);
        //eslint-disable-next-line
        expect(linkElement).toBeInTheDocument();
        done()

    })
})