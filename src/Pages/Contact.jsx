import React from "react";
import Home from "../Home";


function Contact() {
    const style = {

        backgroundColor: "blue",
         width: "100%",
           
        }

   
    return(

        <React.Fragment>
           
        <Home></Home>
        
        <p style={style}>Contact</p>

      </React.Fragment>

    )
}

export default Contact;