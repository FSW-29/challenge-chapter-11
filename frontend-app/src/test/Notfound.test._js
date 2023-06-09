import { render, screen } from '@testing-library/react';
import NotFoundPage from "../pages/notfound/notfound.jsx"
import React from 'react';


//eslint-disable-next-line
describe("TEST PAGE DOESNT EXIST /", () => {
//eslint-disable-next-line
    test("Page Doest Exist", done => {
        render(<NotFoundPage />);
        const linkElement= screen.getByText(/doesn't exist/i);
        //eslint-disable-next-line
        expect(linkElement).toBeInTheDocument();
        done()

    })
})