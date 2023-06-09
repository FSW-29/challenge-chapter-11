import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/Login.page";
import React from "react";

//eslint-disable-next-line
describe('Testing Login Page', () => {
  //eslint-disable-next-line
  test('Render Login Page', () => {
    render(<LoginPage />)
    const loginComponentElement = screen.getByText(/Login/i);
    //eslint-disable-next-line
    expect(loginComponentElement).toBeInTheDocument();
  });
  
});
