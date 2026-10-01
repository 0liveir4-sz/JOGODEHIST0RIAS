import { useState } from "react"
import './Jogo.css'


function Jogo() {
    const[emoji, setEmoji] = useState('👌')
    let emojis = ['😂', '😫', '😁', '😘', '💕', '🎶', '🤷‍♂️', '😎', '😛', '😱']
    function sortear(){
        let p = Math.floor(Math.random()*10)
        setEmoji(emojis[p])
    }
  return (
    <div className="Jogo">
       
        <button className="bt-emoji" onClick={sortear}>
            <p className="p-emoji">{emoji}</p>
        </button>
        
    </div>
  )
}

export default Jogo