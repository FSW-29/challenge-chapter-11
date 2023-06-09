import { render, screen } from '@testing-library/react';
import Home from "../pages/home/Home.jsx"
import React from 'react';


//eslint-disable-next-line
describe("TEST HOMEPAGE /", () => {
//eslint-disable-next-line
    test("render Home", done => {
        render(<Home />);
        const linkElement= screen.getByText(/Welcome to Home/i);
        console.log(linkElement,'===> ini isi link element')
        //eslint-disable-next-line
        expect(linkElement).toBeInTheDocument();
        done()

    })
})