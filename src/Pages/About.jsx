import React from "react";
import Home from "../Home";



function About() {
    const style = {

        backgroundColor: "violet",
         width: "100%",
        
           
        }

   
    return(

        <React.Fragment>
           
        <Home></Home>
        
        <p style={style}>About Us</p>

      </React.Fragment>

    )
}

export default About;