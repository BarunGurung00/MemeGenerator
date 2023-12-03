import { useState } from "react";
import memeData from "./memesData";

// Api for memes: https://api.memegen.link/templates;

export default function Main() {

  const [meme,setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImg:"https://api.memegen.link/images/agnes.png"
  })

  const getMemeImage = () => {
    const memeArray = memeData;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].blank;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImg: url
      }
  })
  };

  const [bool, setBool] = useState(true)

  function handler(){
       setBool(prevBool =>!prevBool)
  }

  return (
    <>
      <main style={bool ?  {backgroundColor:"white"}: {backgroundColor:"black",color:"blue"}}>
        <div className="main">
          <div className="inputs">
            <div className="ins">
              <input type="text" placeholder="Upper text"></input>
              <input type="text" placeholder="Lower text"></input>
            </div>
          </div>
          <button onClick={getMemeImage} >Click for a new Meme</button>
        </div>
        <img className="memeImg" src={meme.randomImg} alt="meme" />
        <button onClick={handler}>toggle background color</button>
      </main>
    </>
  )
}
