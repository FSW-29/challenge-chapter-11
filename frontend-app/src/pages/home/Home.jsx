import React from 'react';
import NavbarMainComponent from '../../components/NavbarMain.component';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


export default function HomePage(){


    const [validLogin, setValidLogin]=useState()
    useEffect(() =>{
        cekToken();
        
    },[])

    const cekToken = () =>{
        if (localStorage.getItem("token")) {
            setValidLogin("Valid");
          }
    }

    return(
        <>

            {
                validLogin ? (
                    <>
                        <h1>User already login, display Homepage</h1>
                    </>
                ) : (
                    <>
                        <h2>User doesnt login, display landingPage</h2>
                    </>
                )
            }
            <NavbarMainComponent />
            <h1> Welcome to Home</h1>
        </>

    )
}
