import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/troll-face.png" 
                className="header--image"
                alt='trollface'
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}