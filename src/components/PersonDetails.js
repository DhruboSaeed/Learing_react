import React from 'react'

export default function PersonDetails({ person }) {
    return (
        <div>
            <h2>
                Myself {person.name} and {person.age} old with {person.skill}.
            </h2>
        </div>
    )
}
