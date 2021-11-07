import React from 'react'

export default function FunctionClickHandler() {

    function clickHadler() {
        console.log("Clicked!")
    }

    return (
        <div>
            <button onClick={clickHadler}>Click</button>
        </div>
    )
}
