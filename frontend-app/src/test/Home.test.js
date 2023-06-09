import { render, screen } from '@testing-library/react';
import HomePage from "../pages/home/Home.jsx"
import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "..";

jest.mock('axios');

describe("TEST Home Page /", () => {

    //eslint-disable-next-line
        //test render valid with access token
        test("render Homepage with access token", done => {
            localStorage.setItem("token", "token exist");

            render(
                <Provider store={ store }>
                    <MemoryRouter>
                        <HomePage />
                    </MemoryRouter>
                </Provider>
            );

            const linkElement= screen.getByText(/User already login, display Homepage/i);
            //eslint-disable-next-line
            expect(linkElement).toBeInTheDocument();
            localStorage.removeItem("token");
            done()
    
        })

        //test render invalid because np access token
        test("render HomePage without access token", done => {
            render(
                <Provider store={ store }>
                    <MemoryRouter>
                        <HomePage />
                    </MemoryRouter>
                </Provider>
            );
            
            const linkElement= screen.getByText(/User doesnt login, display landingPage/i);
            //eslint-disable-next-line
            expect(linkElement).toBeInTheDocument();
 
            done()
    
        })
    })