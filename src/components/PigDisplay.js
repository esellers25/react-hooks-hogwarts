import Pig from "./Pig";

function PigDisplay({hogs}){
    
    const pigArray = hogs.map((hog) => {
        console.log(hog.image)
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
    
    return(
        <>
            <h1>Award-Winning Pigs!</h1>
                <ul className="ui grid container">{
                pigArray}
                </ul>
        </>


    )
}

export default PigDisplay;