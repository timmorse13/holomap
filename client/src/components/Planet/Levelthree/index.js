import React from "react";

function LevelThree({ name, image, description, birth_year }) {
    return (
    <div>
        {/* <Carousel> */}
        
        {image ? (
        <div>
        
        <img src= {`/${image}`} alt='' />
        <h3>Name: {name}</h3> <br />
        Birth year: {birth_year} < br/>
        {/* {image} */}

        {description} <br />
        <br />
        
        </div>
        ): (<div></div>)}
        {/* </Carousel> */}
    </div>
    )
}
export default LevelThree;