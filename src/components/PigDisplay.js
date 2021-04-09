import { useState } from "react";
import Pig from "./Pig";

function PigDisplay({hogs}){

    const [isFiltered, setIsFiltered] = useState(false)
    const [nameSorted, setNameSorted] = useState(false)
    const [weightSorted, setWeightSorted] = useState(false)
    

    const filteredPigs = hogs.filter(hog => {
        return !isFiltered || hog.greased
    })


    //if name sort, sort by name, if weight sort, sort by weight, otherwise dont sort
    const sortedPigs = filteredPigs.sort((pig1, pig2) => {
        if (nameSorted) {
            return pig1.name.localeCompare(pig2.name)
        } else if(weightSorted){
            return pig1.weight - pig2.weight
        } else {
            return 0
        }
    })
    
    const pigArray = sortedPigs.map((hog) => {
        // console.log(hog.image)
        return (
            <Pig 
                key={hog.name}
                name={hog.name}
                image={hog.image}
                speciality={hog.speciality}
                weight={hog.weight}
                greased={hog.greased}
                highestmedalachieved={hog["highest medal achieved"]}
            />
        )
    })

    function handleFilterPress() {
        setIsFiltered(!isFiltered)
    }

    function sortByName() {
        setNameSorted(true)
        setWeightSorted(false)
    }

    function sortByWeight() {
        setWeightSorted(true)
        setNameSorted(false)
    }
    
    return(
        <>
            <h1>Award-Winning Pigs!</h1>
            <button onClick={handleFilterPress}>Filter Greased</button>
            <h3>sort by:</h3>
            <button onClick={sortByName}>name</button>
            <button onClick={sortByWeight}>weight</button><br></br>
                <div>
                    <ul className="ui grid container">
                    {pigArray}
                    </ul>
                </div>
        </>


    )
}

export default PigDisplay;