import React from 'react'

export default function ChilComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('From Clid Component')} >Greet Parent Class</button>
        </div>
    )
}
