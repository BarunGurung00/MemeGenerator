import logo from './assets/memePageLogo.jpg'

export default function Header(){
    return (
        <div className="header">
            <img id="logo" src={logo} alt=""/>
            <h1 className="h1">Meme Generator</h1>
            <h2 className="h2">React project</h2>
        </div>
    )
}