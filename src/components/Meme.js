import React, { useState } from "react";

export default function Meme() {
    // const [img, setImg] = useState();
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });
    const [allMemesData, setAllMemesData] = useState([]);

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemesData(data.data.memes))
    }, [allMemesData])
    
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

    function getRandomImage() {
        const random = allMemesData[Math.floor(Math.random()*allMemesData.length)];
        const url = random.url;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    return (
        <div className="form">
            <div className="inputs">
                <input type='text' onChange={handleChange} name='topText' value={meme.topText}></input>
                <input type='text' onChange={handleChange} name='bottomText' value={meme.bottomText}></input>
            </div>
            <button className="new-image" onClick={getRandomImage}>Get a new meme image <img src="./images/icons8-picture.svg" alt="icon"/></button>
            <div className="meme">
            <img src={meme.randomImage} className='meme-img' alt="meme placeholder"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}