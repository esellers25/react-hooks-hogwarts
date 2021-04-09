import {useState} from "react";

function Pig({name, image, speciality, greased, weight, highestmedalachieved}){
    
    const [hidden, setHidden] = useState(false)

    function showInfo(){
        setHidden(!hidden)
    }
    
    return(
        <li className="ui eight wide column" onClick={showInfo}>
            <h1>{name}</h1>
                <img src={image} alt={name}></img>
                    {hidden ? 
                    (<><p>Speciality: {speciality}</p>
                    <p>{greased ? "Greased" : "Not Greased"}</p>
                    <p>Weight: {weight}</p>
                    <p>Highest Medal Achieved: {highestmedalachieved}</p></>) : null}
        </li>
    )
}

export default Pig;