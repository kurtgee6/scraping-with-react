import React from "react";
import "./scrapeButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const scrapeButton = props => (
    <div>
        <div id="buttContainer">
        <button id="scrapeArt">Scrape Sports Articles</button> 
        </div>
    </div>
);

export default scrapeButton;