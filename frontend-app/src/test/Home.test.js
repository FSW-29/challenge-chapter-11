import { render, screen } from '@testing-library/react';
import HomePage from "../pages/home/Home.jsx"
import React from 'react';


describe("TEST Profile Page /", () => {

    //eslint-disable-next-line
        //test render valid with access token
        test("render Homepage with access token", done => {
            localStorage.setItem("token", "token exist");

            render(<HomePage />);

            const linkElement= screen.getByText(/User already login, display Homepage/i);
            //eslint-disable-next-line
            expect(linkElement).toBeInTheDocument();
            localStorage.removeItem("token");
            done()
    
        })

        //test render invalid because np access token
        test("render HomePage without access token", done => {
            render(<HomePage />);
            
            const linkElement= screen.getByText(/User doesnt login, display landingPage/i);
            //eslint-disable-next-line
            expect(linkElement).toBeInTheDocument();
 
            done()
    
        })
    })