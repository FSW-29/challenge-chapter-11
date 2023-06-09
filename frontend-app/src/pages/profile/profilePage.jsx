import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


export default function ProfilePage(){

    let [validLogin, setValidLogin]=useState()
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
        <h1> Welcome to Profile</h1>
            {
                validLogin ? (
                    <>
                        <h1>Login valid</h1>
                    </>
                ) : (
                    <>
                        <h2>Login Invalid</h2>
                    </>
                )
            }
        
        
        </>
        
    )
}