import React from 'react'

export default function Header()
{
    return (
        <header className='header'>
            <img src="logo.png" alt="logo" className='logo'/>
            <h2 className='header--title'>Meme Generator</h2>
            <p className='header--project'>React Course - Project 3</p>
        </header>
    )
}