import React from 'react'
import PersonDetails from './PersonDetails'

export default function NameList() {

    const persons = [
        {
            id: 1,
            name: 'Person 1',
            age: 11,
            skill: 'Robber'
        },
        {
            id: 2,
            name: 'Person 2',
            age: 45,
            skill: 'Hitman'
        },
        {
            id: 3,
            name: 'Person 3',
            age: 22,
            skill: 'Jacker'
        },
        {
            id: 4,
            name: 'Person 4',
            age: 30,
            skill: 'Killer'
        }
    ]

    const personList = persons.map(person => <PersonDetails person={person} />)

    return (
        <div>
            {personList}
        </div>
    )
}
