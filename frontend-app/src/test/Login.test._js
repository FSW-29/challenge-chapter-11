import { render, screen } from '@testing-library/react';
import Home from "../pages/home/Home.jsx"
import React from 'react';

//eslint-disable-next-line
describe("TEST LOGIN /", () => {
    //eslint-disable-next-line
        test("render Login", done => {
            render(<LoginPage />);
            const linkElement= screen.getByText(/Login/i);
            //eslint-disable-next-line
            console.log(linkElement, "==> INI ISI LINK ELEMENT");
            expect(linkElement).toBeInTheDocument();
            done()
            
        })
    })



