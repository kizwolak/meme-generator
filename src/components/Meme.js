import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
    // const [img, setImg] = useState();
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });
    const [allMemesData, setAllMemesData] = useState(memesData.data.memes);
    
    function getRandomImage(memes) {
        const random = allMemesData[Math.floor(Math.random()*memes.length)]
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: random.url
            }
        })
    }
    return (
        <div className="form">
            <div className="inputs">
                <input type='text'></input>
                <input type='text'></input>
            </div>
            <button className="new-image" onClick={() => getRandomImage(allMemesData)}>Get a new meme image <img src="./images/icons8-picture.svg" alt="icon"/></button>
            <img src={meme.randomImage} className='meme-img' alt="meme placeholder"/>
        </div>
    )
}