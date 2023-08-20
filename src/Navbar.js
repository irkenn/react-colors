import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div className="navbar-div">
            <Link to={"/color/new"}>Add a color</Link>
        </div>

    );

}

export default Navbar;