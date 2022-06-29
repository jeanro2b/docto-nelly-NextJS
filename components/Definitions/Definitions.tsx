import React from "react";

const Definitions = ({image, title, text}:any) => {
    return (
        <div className={"definition-container"}>
            <div className={"image-container"}>
                <img src={image} alt={image}/>
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}

export default Definitions;