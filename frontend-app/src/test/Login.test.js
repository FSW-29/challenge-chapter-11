import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "..";
import LoginPage from "../pages/Login.page";
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
          <LoginPage data={"Login Page"} />
        </MemoryRouter>
      </Provider>
    );

    const loginComponentElement = screen.getByText(/Login Page/i);
    //eslint-disable-next-line
    expect(loginComponentElement).toBeInTheDocument();
  });

  //eslint-disable-next-line
  test('Test Find Button Login', () => {
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const buttonLogin = screen.getByText(/Login Now/i);
    //eslint-disable-next-line
    expect(buttonLogin).toBeInTheDocument();
  });

  //eslint-disable-next-line
  test('Test Find Button Register', () => {
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const buttonLogin = screen.getByText(/Dont Have Account/i);
    //eslint-disable-next-line
    expect(buttonLogin).toBeInTheDocument();
  });

  test('data is Login MASUK SINI', () =>{
      render(
        <Provider store={ store }>
          <MemoryRouter>
            <LoginPage data={"Login Page"} />
          </MemoryRouter>
        </Provider>
      );
      const titleIsLogin = screen.getByText(/Login Page/i);
      expect(titleIsLogin).toBeInTheDocument();
    })
     
  test('data is Sign In', () =>{
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage data={"Sign In"} />
        </MemoryRouter>
      </Provider>
    );
    const titleIsLogin = screen.getByText(/Sign In/i);
    expect(titleIsLogin).toBeInTheDocument();
  });

});
