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
    
    function handleChange(event) {
        const {name, value, checked, type} = event.target;
        console.log(meme);
        setMeme(prevData => {
            return {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

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
                <input type='text' onChange={handleChange} name='topText' value={meme.topText}></input>
                <input type='text' onChange={handleChange} name='bottomText' value={meme.bottomText}></input>
            </div>
            <button className="new-image" onClick={() => getRandomImage(allMemesData)}>Get a new meme image <img src="./images/icons8-picture.svg" alt="icon"/></button>
            <div className="meme">
            <img src={meme.randomImage} className='meme-img' alt="meme placeholder"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}