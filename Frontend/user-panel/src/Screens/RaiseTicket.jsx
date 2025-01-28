import React from "react";
//import { Container, Row, Col } from "react-bootstrap";

import RaiseTicketComp from "../Components/RaiseTicketComp";

function RaiseTicket() {
    const handleOnChange = e =>{
        const {name, value} = e.target
        console.log(name,value)
    }
    return(
        <div>
            <RaiseTicketComp
                handleOnChange = {handleOnChange}
            />
        </div>
    )
}

export default RaiseTicket