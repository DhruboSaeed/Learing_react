import React from 'react'

export default function Greetings(props) {
    return (
        <div>
            <h1>
                Hello there, {props.name} a.k.a {props.typeName}.
            </h1>

            {props.children}
        </div>
    )
}
