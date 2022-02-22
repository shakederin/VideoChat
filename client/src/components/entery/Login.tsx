import React, { Dispatch, SetStateAction, useContext, useRef } from 'react'
import socket from '../../utils/socket';

export default function Login() {
    const inputElement = useRef<HTMLInputElement>(null)
    const setUserName = () =>{
        socket.emit("setUserName", (inputElement.current?.value))
    }

    return (
        <div>Login
            <input ref={inputElement} type="text"/>
            <button onClick={setUserName}>login</button>
        </div>
    )
}
