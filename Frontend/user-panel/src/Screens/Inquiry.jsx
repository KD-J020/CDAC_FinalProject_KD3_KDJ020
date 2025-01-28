import React from "react";
//import { Container, Row, Col } from "react-bootstrap";

import InquiryComp from "../Components/InquiryComp";

function Inquiry() {
    const handleOnChange = e =>{
        const {name, value} = e.target
        console.log(name,value)
    }
    return(
        <div>
            <InquiryComp
                handleOnChange = {handleOnChange}
            />
        </div>
    )
}

export default Inquiry