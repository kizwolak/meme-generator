import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
    const [img, setImg] = useState();
    const memes = memesData.data.memes
    function getRandomImage(memes) {
        const random = memes[Math.floor(Math.random()*memes.length)]
        setImg(random.url);
    }
    return (
        <div className="form">
            <div className="inputs">
                <input type='text'></input>
                <input type='text'></input>
            </div>
            <button className="new-image" onClick={() => getRandomImage(memes)}>Get a new meme image <img src="./images/icons8-picture.svg" alt="icon"/></button>
            <img src={img} className='meme-img' alt="meme placeholder"/>
        </div>
    )
}