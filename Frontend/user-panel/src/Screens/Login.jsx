import React, { useState } from "react";

import LoginComp from "../Components/LoginComp";
import PassResetComp from "../Components/PassResetComp";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [formLoad, setFormLoad] = useState('login')

    const handleOnChange = e =>{
        const {name, value} = e.target
        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
        
            default:
                break;
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault()

        if(!email || !password){
            return alert("Fill up all the form!")
        }


    }

    const handleOnResetSubmit = e => {
        e.preventDefault()

        if(!email){
            return alert("Fill up all the form!")
        }


    }

    const formSwitcher = formType => {
        setFormLoad(formType)
    }

    return (
    <div className="login-page">
        {formLoad === 'login' && <LoginComp 
            handleOnChange = {handleOnChange}
            handleOnSubmit = {handleOnSubmit}
            formSwitcher = {formSwitcher}
            email = {email}
            pass = {password}
        />}
        
        {formLoad === 'reset' && <PassResetComp 
            handleOnChange = {handleOnChange}
            handleOnResetSubmit = {handleOnResetSubmit}
            formSwitcher = {formSwitcher}
            email = {email}
        />}
        
    </div>
    )
}

export default Login