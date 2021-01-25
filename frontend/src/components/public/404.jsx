import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>4<span>0</span>4</h1>
                </div>
                <p>The page you are looking for is unavailable.</p>
                <Link to="/mobile_phones" >HOMEPAGE</Link>
            </div>
	    </div>
    );
}

export default PageNotFound;
