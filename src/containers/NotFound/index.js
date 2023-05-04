import React from "react";
import './NotFound.css'

function NotFound(){
    return(
    <div className="NotFound">
        <h1>404</h1>
        <div class="info">
            <h2>We can't find that page</h2>
            <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p>
            <a href="https://jhey.dev" target="_blank" rel="noreferrer noopener">Home</a>
        </div>
    </div>
    )

    
}
export{NotFound}