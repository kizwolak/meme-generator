import React from "react";

export default function Meme() {
    return (
        <div className="form">
            <form>
                <div className="inputs">
                    <input type='text'></input>
                    <input type='text'></input>
                </div>
                <button className="new-image">Get a new meme image <img src="./images/icons8-picture.svg" alt="icon"/></button>
            </form>
        </div>
    )
}