import React from 'react'

function HeroNames({ heroName }) {

    if (heroName === "Joker") {
        throw new Error('Not a hero!')
    }

    return (
        <div>
            {heroName}
        </div>
    )
}

export default HeroNames