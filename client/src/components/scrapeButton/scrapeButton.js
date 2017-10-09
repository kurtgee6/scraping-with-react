import React, { Component } from "react";
import "./scrapeButton.css";


class scrapeButton extends Component {

    state = {
        headline: "",
        summary: "",
        author: ""
    }

   render () {
        return (
            <div>
                <div id="buttContainer">
                <button id="scrapeArt">Scrape Sports Articles</button> 
                </div>
            </div>
        )
   }
};

export default scrapeButton;