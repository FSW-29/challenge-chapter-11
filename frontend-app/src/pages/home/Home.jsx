import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


export default function HomePage(){

    let [validLogin, setValidLogin]=useState()
    useEffect(() =>{
        cekToken();
        
    },[])

    const cekToken = () =>{
        if (!localStorage.getItem("token")) {

          }else{
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
        
        
        </>
        
    )
}
