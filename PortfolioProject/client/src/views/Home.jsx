import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const Home = () => {
    
    return(
        <div className="container d-flex align-items-center justify-content-center" style={{height:"800px"}}>
            <div>
                <Link to={`/portfolio`} style={{textDecorationLine:"none"}}>
                <h1 className="text-white" >Enter Domain</h1>
                </Link>
            </div>
        </div>

    )

}
export default Home