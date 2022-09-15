import React, { useEffect, useState } from 'react'


export default function Meme()
{
    const [memes,setMemes]=useState([])
    const [memeURL,setMemeURL]=useState(
        {
            topText:"",
            bottomText:"",
            randomImg:undefined
        }
    );
    console.log("Re-render")
    useEffect(()=>{
        console.log("Fetch data")
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())        
        .then(data=>{
            console.log(data)
            setMemes(data.data.memes)})
    },[0])
    function getMeme()
    {
       
        const memesArray=memes
        const rndIndex=Math.floor(Math.random()*memesArray.length)
        const url=memesArray[rndIndex].url
        setMemeURL(prevState=>({
            ...prevState,
            randomImg:url
        })      )
        
    }

    function handleChange(event)
    {
        const {name,value}=event.target
        
        
        setMemeURL(prevState=>({
                ...prevState,
                [name]:value
            })
        )
    }
    return(
        <main>
            
            <div className='form'>
                <input 
                type="text" 
                className='form--input' 
                placeholder='Top text'
                name='topText'
                value={memeURL.topText}
                onChange={handleChange}
                />
                <input 
                type="text" 
                className='form--input' 
                placeholder='Bottom text'
                value={memeURL.bottomText}
                name='bottomText'
                onChange={handleChange}
                />
                
                <button className='form--button' onClick={getMeme}>Get a new meme image  🖼</button>
            </div>
            <div className='meme'>
            {memeURL.randomImg&&<img src={memeURL.randomImg} alt="meme" className='meme--image'/>}
            <h2 className='meme--text top'>{memeURL.topText}</h2>
            <h2 className='meme--text bottom'>{memeURL.bottomText}</h2>
            </div>
            
            
        </main>
    )
}