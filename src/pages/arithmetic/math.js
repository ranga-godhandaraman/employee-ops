import React, { useRef, useState } from "react";


function Math() {
    const inputRef = useRef(null);
    const [name, setName] = useState("");

    function setNameValue(){
        setName(inputRef.current.value);
    }

    return (
        <div>
            {
                (name === "") ? 
                <div>
                    Please enter your name : <input type="text" ref={inputRef}/>
                    <button onClick={setNameValue}>Go</button>
                </div> 
                :
                <div>Welcome to Math {name}.</div>
            }
        </div>
    )
}

export default Math;