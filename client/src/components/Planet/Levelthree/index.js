import React from "react";

function LevelThree({ name, image, description, birth_year }) {
    return (
    <div className="" style={{textAlign:"center"}}>
        {/* <Carousel> */}
        
        {image ? (
        <div>
        
        <img src= {`/${image}`} alt='' />
        <h3>Name: {name}</h3> <br />
        Birth year: {birth_year} < br/>
        {/* {image} */}

        <br />
        
        </div>
        ): (<div></div>)}
        {/* </Carousel> */}
    </div>
    )
}
export default LevelThree;