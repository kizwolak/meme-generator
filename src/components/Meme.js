import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const memes = memesData.data.memes
    function getRandomImage(memes) {
        console.log(memes[Math.floor(Math.random()*memes.length)]);
    }
    return (
        <div className="form">
                <div className="inputs">
                    <input type='text'></input>
                    <input type='text'></input>
                </div>
                <button className="new-image" onClick={() => getRandomImage(memes)}>Get a new meme image <img src="./images/icons8-picture.svg" alt="icon"/></button>
        </div>
    )
}