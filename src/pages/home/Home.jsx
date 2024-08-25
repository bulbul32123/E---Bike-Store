import React from 'react'
import Hero from './hero/Hero'

export default function Home({ data }) {
    return (
        <div>
            <Hero data={data} />
        </div>
    )
}
