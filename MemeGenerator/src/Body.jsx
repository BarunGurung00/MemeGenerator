import { useEffect, useState } from "react";
// Api for memes: https://api.memegen.link/templates;

export default function Main() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://api.memegen.link/images/agnes.png"
  })
 
  const [data, setData] = useState({})
  useEffect(() => {
    fetch("https://api.memegen.link/templates")
      .then(response => response.json())
      .then(response => setData(response))
  }, [])

  console.log(data)
  const getMemeImage = () => {
    const memeArray = data;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].blank;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImg: url
      }
    })
  };

  //This part is to set the background color of the page
  const [bool, setBool] = useState(true)
  function handler() {
    setBool(prevBool => !prevBool)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }
  return (
    <>
      <main style={bool ? { backgroundColor: "white" } : { backgroundColor: "black", color: "blue" }}>
        <div className="main">
          <div className="inputs">
            <div className="ins">
              <input
                type="text"
                name="topText"
                value={meme.topText}
                placeholder="Upper text"
                onChange={handleChange}>
              </input>
              <input
                type="text"
                name="bottomText"
                value={meme.bottomText}
                placeholder="Lower text"
                onChange={handleChange}>
              </input>
            </div>
          </div>
          <button onClick={getMemeImage} >Click for a new Meme</button>
        </div>
        <div style={{ position: "relative" }}>
          <img className="memeImg" src={meme.randomImg} alt="meme" />
          <h2 id="topText" className="topText">{meme.topText}</h2>
          <h2 id="bottomText" className="bottomText">{meme.bottomText}</h2>
        </div>
        <button onClick={handler}>toggle background color</button>
      </main>
    </>
  )
}
