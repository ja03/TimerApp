import React, { useEffect } from 'react'
import { useState } from 'react'
const Timer = ({fontColor})=>{
    const [count, setCount]= useState(0)
    const [sec, setSec]= useState(0)
    const [min, setMin] = useState(25)
    const [inputValue, setInputValue]= useState('')
    const [play, setPlay] = useState(true)
    const [session, setSession]= useState(-1)
    // const [shortBreak, setShortBreak] = useState(false)

    
    useEffect( () => {
        const countDown = ()=>{
                setMin(Math.floor(count/60))
                setSec(count % 60)
                setCount(count-1)
                count === 0 ? setSession(session+1) : console.log('not yet')
        }
        if(count >= 0 && play){
            const interval = setInterval(countDown, 1000)
            return ()=>{clearInterval(interval)}
        }
    },[count, play, sec, session])
    const getTime = (e) => {
        e.preventDefault();
        if(inputValue > 0){
            const newCount = parseInt(inputValue, 10);
            setCount(newCount*60);
        }
    }
    const startTimer= ()=>{
        if(session > 0 && session % 4 === 0){
            setCount(5*60)
        }else{
            setCount(25*60)
        }
    }
    const stopTimer = ()=>{
        setPlay(false)
    }
    const resumeTimer =()=>{
        setPlay(true)
    }
    const skipSession = ()=>{
        setCount(0)
    }
    return(
        <div className={`mx-auto grid items-center text-[${fontColor}] transition-colors p-2`}>
            <div className='mx-auto my-10 rounded-lg border-4 border-white/50 w-full h-60 flex flex-col items-center justify-center gap-4  '>
                <h2 className='text-7xl font-semibold tracking-wider'>
                    {count > 0 ? `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : '25:00'}
                </h2>
                <p>{session > 0 ? `Completed  Sessions: ${session}`: `Completed Sessions: 0`}</p>
                <p>{session > 0 && session % 4 === 0? `Break Time ` : ' '}</p>
            </div>
            <div className='mx-auto flax flex-col space-y-7'>
                <div>
                    <button className='w-full border-black bg-slate-600 p-2 rounded text-cyan-200 mx-auto' onClick={startTimer}>
                        {session > 0 && session % 4 === 0 ?  'Start Short Break' : 'Start Timer'}
                    </button>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-4' >
                    <button className='border-black bg-slate-600 p-2 rounded text-cyan-200 md:w-[100px] w-full' onClick={stopTimer}>Pause</button>
                    <button className='border-black bg-slate-600 p-2 rounded text-cyan-200 md:w-[100px] w-full' onClick={resumeTimer}>Resume</button>
                    <button className='border-black bg-slate-600 p-2 rounded text-cyan-200 md:w-[100px] w-full' onClick={skipSession}>Skip </button>
                </div>
                <form className='w-full' onSubmit={getTime}>
                    <button className='border-black bg-slate-600 mr-4 p-2 rounded text-cyan-200' type='submit'>Set Timer</button> 
                    <input 
                        type="number" 
                        className='ml-4 p-2  text-cyan-800 bg-teal-400 rounded-md opacity-40 hover:opacity-100 transition-opacity outline-0 w-1/3' 
                        value={inputValue}
                        onChange={(e)=>{setInputValue(e.target.value)}}
                    />
                </form>
            </div>
        </div>
    )
}
export default Timer