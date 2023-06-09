import { render, screen } from '@testing-library/react';
import ProfilePage from "../pages/profile/profilePage.jsx"
import React from 'react';


describe("TEST Profile Page /", () => {

    //eslint-disable-next-line
        //test render valid with access token
        test("render profile with access token", done => {
            localStorage.setItem("token", "token exist");

            render(<ProfilePage />);

            const linkElement= screen.getByText(/Login valid/i);
            //eslint-disable-next-line
            expect(linkElement).toBeInTheDocument();
            localStorage.removeItem("token");
            done()
    
        })

        //test render invalid because np access token
        test("render profile without access token", done => {
            render(<ProfilePage />);
            
            const linkElement= screen.getByText(/Login Invalid/i);
            //eslint-disable-next-line
            expect(linkElement).toBeInTheDocument();

            done()
    
        })
    })