import React, { Fragment } from "react";

import { Link, Outlet } from "react-router-dom";

function Home() {
    const style = {

        backgroundColor: "green",
         width: "100%",
         TextDecoration : "none"
           
        }

     return(

    
      
      <React.Fragment>

           <nav className="navbar navbar-expand-lg">
                <Link to = {"/"} className="Navbar-brand p-5" style={style}>Home</Link>
                <Link to = {"About"} className="p-5" style={style}>About us </Link>
                <Link to = {"Contact"} className="p-5" style={style}>Contact</Link>
            </nav>

            <Outlet></Outlet>

           
        </React.Fragment>

    )

}
 export default Home;