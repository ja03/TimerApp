import React, { useEffect } from 'react'
import { useState } from 'react'
const Timer = ()=>{
    const [count, setCount]= useState(0)
    const [sec, setSec]= useState(0)
    const [min, setMin] = useState(0)
    const [inputValue, setInputValue]= useState(' ')
    const [play, setPlay] = useState(true)
    const [session, setSession]= useState(-1)
    // const [shortBreak, setShortBreak] = useState(false)

    const countDown = ()=>{
            setMin(Math.floor(count/60))
            setSec(count % 60)
            setCount(count-1)
            count === 0 ? setSession(session+1) : console.log('not yet')
    }

    useEffect( () => {
        if(count >= 0 && play){
            const interval = setInterval(countDown, 1000)
            return ()=>{clearInterval(interval)}
        }
    },[count, play, sec, countDown])
    const getTime = (e) => {
        e.preventDefault();
        if(inputValue > 0){
            const newCount = parseInt(inputValue, 10);
            setCount(newCount*60);
        }
    };
    const stopTimer = ()=>{
        setPlay(false)
    }
    const resumeTimer =()=>{
        setPlay(true)
    }
    const skipSession = ()=>{
        setCount(0)
        setSession(session+1)
    }
    return(
        <div className='mx-auto grid items-center text-white '>
            <div className='mx-auto my-20 flex flex-col items-center gap-4'>
                <h2 className='text-6xl font-semibold tracking-wider'>
                    {count > 0 ? `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : '00:00'}
                </h2>
                <p>{session > 0 ? `Finished Sessions: ${session}`: `Finished Sessions: 0`}</p>
                <p>{session === 4 ? 'Break Time' : ' '}</p>
            </div>
            <div className='mx-auto flax flex-col space-y-7'>
                <form onSubmit={getTime}>
                    <button className='border-black bg-slate-600 mx-4 p-2 rounded text-cyan-200' type='submit'>Set Timer</button> 
                    <input 
                        type="number" 
                        className='mx-4 p-2  text-cyan-800 bg-teal-400 rounded-md opacity-40 hover:opacity-100 transition-opacity outline-0' 
                        value={inputValue}
                        onChange={(e)=>{setInputValue(e.target.value)}}
                    />
                </form>
                <button className='border-black bg-slate-600 mx-4 p-2 rounded text-cyan-200' onClick={stopTimer}>Pause</button>
                <button className='border-black bg-slate-600 mx-4 p-2 rounded text-cyan-200' onClick={resumeTimer}>Play Timer</button>
                <button className='border-black bg-slate-600 mx-4 p-2 rounded text-cyan-200' onClick={skipSession}>Skip session</button>
            </div>
        </div>
    )
}
export default Timer