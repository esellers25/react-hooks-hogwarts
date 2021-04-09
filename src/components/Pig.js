import {useState} from "react";

function Pig({name, image, speciality, greased, weight, highestmedalachieved}){
    
    const [hidden, setHidden] = useState(false)
    const [hidePig, setHidePig] = useState(true)

    function showInfo(){
        setHidden(!hidden)
    }
    
    function handleHidePig(){
        setHidePig(!hidePig)
    }

    return(
        <li className="ui eight wide column maxPigTile" onClick={showInfo}>
            {hidePig ? 
                (<>
                    <h1>{name}</h1>
                        <img className="minPigTile" src={image} alt={name}></img>
                        {hidden ? 
                        (<><p>Speciality: {speciality}</p>
                        <p>{greased ? "Greased" : "Not Greased"}</p>
                        <p>Weight: {weight}</p>
                        <p>Highest Medal Achieved: {highestmedalachieved}</p></>) : null} </>) : null} <br></br>
                <button onClick={handleHidePig}>{hidePig ? "Hide" : "Show"} Pig</button>
        </li>
    )
}

export default Pig;