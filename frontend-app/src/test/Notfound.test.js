import { render, screen } from '@testing-library/react';
import NotFoundPage from "../pages/notfound/notfound.jsx"
import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "..";


//eslint-disable-next-line
describe("TEST PAGE DOESNT EXIST /", () => {
//eslint-disable-next-line
    test("Page Doest Exist", done => {
        render(<Provider store={ store }>
                    <MemoryRouter>
                        <NotFoundPage />
                    </MemoryRouter>
                </Provider>);
        const linkElement= screen.getByText(/404/i);
        //eslint-disable-next-line
        expect(linkElement).toBeInTheDocument();
        done()

    })
})