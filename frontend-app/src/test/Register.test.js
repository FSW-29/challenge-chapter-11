import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "..";
import RegisterPage from "../pages/Register.page";
import React from "react";

//eslint-disable-next-line
jest.mock('axios');

//eslint-disable-next-line
describe('Testing Login Page', () => {
  //eslint-disable-next-line
  test('Render Login Page', () => {
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <RegisterPage />
        </MemoryRouter>
      </Provider>
    );

    const registerComponentElement = screen.getByText(/Register New User/i);
    //eslint-disable-next-line
    expect(registerComponentElement).toBeInTheDocument();
  });

  //eslint-disable-next-line
  test('Test Find Button Register', () => {
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <RegisterPage />
        </MemoryRouter>
      </Provider>
    );

    const buttonLogin = screen.getByText(/Register Now/i);
    //eslint-disable-next-line
    expect(buttonLogin).toBeInTheDocument();
  });

  //eslint-disable-next-line
  test('Test Find Button Login', () => {
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <RegisterPage />
        </MemoryRouter>
      </Provider>
    );

    const buttonLogin = screen.getByText(/Have Account?/i);
    //eslint-disable-next-line
    expect(buttonLogin).toBeInTheDocument();
  });
});
