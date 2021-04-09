import {useState} from "react";

function NewPigForm({onAddPig}){
    
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [speciality, setSpeciality] = useState("")
    const [weight, setWeight] = useState("")
    const [medal, setMedal] = useState("")
    const [greased, setGreased] = useState(false)
    
    function handleNewPigSubmit(event){
        event.preventDefault();
        const newPig = {
            name: name,
            image: image,
            speciality: speciality, 
            weight: parseFloat(weight),
            medal: medal,
            greased: greased
        }
        onAddPig(newPig)
    }

    return(
        <div>
            <h2>Add Your Own Pig</h2>
             <form onSubmit={handleNewPigSubmit}>
                 <label htmlFor="name">Name</label>
                 <input type="text" name="name" 
                 value={name} 
                 onChange={e => setName(e.target.value)}
                 placeholder="Pig name">
                 </input><br></br>
                 
                 
                 <label htmlFor="image">Image</label>
                 <input type="text" name="image" 
                 value={image} 
                 onChange={e => setImage(e.target.value)}
                 placeholder="Pig image">
                 </input><br></br>
                 
                 <label htmlFor="speciality">Speciality</label>
                 <input type="text" name="speciality" 
                 value={speciality} 
                 onChange={e => setSpeciality(e.target.value)}
                 placeholder="Speciality">
                 </input><br></br>
                 
                 <label htmlFor="weight">Weight</label>
                 <input type="text" name="weight" 
                 value={weight} 
                 onChange={e => setWeight(e.target.value)}
                 placeholder="Weight">
                 </input><br></br>
                 
                 <label htmlFor="greased">Greased?</label>
                 <input type="checkbox" name="greased" 
                 checked={greased} 
                 onChange={e => setGreased(e.target.checked)}></input><br></br>
                 
                 <label htmlFor="medal">Highest Medal Achieved</label>
                 <input type="text" name="medal" 
                 value={medal} 
                 onChange={e => setMedal(e.target.value)}
                 placeholder="Highest Medal Achieved">
                 </input><br></br>

                 <button type="submit">Add Pig</button>
            </form>
        </div>
    )
}

export default NewPigForm;