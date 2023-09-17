import Timer from "./Timer";
import { useState } from "react";
import Logo from './clockWiseLogo.svg'

function App() {
  const [bgColor, setBgColor] = useState('#3D7C91')
  // const [textColor , setTextColor] = useState('#ffffff')

  // useEffect(()=>{
  //   if(bgColor === '#BFD1E5'){
  //     setTextColor('#121212')
  //   }else {
  //     setTextColor('#ffffff')
  //   }
  // },[bgColor, textColor])

  return (
    <div className={`py-10 bg-[${bgColor}] w-full h-auto md:h-screen relative transition-colors`}>
      <div className=" grid items-center">
        <div className="flex gap-4 items-center px-8"> 
          <img src={Logo} alt="logo" className={ `w-[32px]` }/>
          <h1 className={`text-center text-3xl text-[#fff]`}>ClockWise</h1> 
        </div>
        <Timer fontColor={'#fff'}/>
        <div className="md:absolute right-5 bottom-5 flex md:flex-col flex-row md:gap-2 mx-auto gap-10 my-4">
          <button
              className="rounded-md w-8 h-8 bg-[#3D7C91] cursor-pointer shadow-md shadow-slate-600 border-2 border-slate-600/50"
              onClick={()=>{setBgColor('#3D7C91')}}
          ></button>
          <button
              className="rounded-md w-8 h-8 bg-[#373F51] cursor-pointer shadow-md shadow-slate-600 border-2 border-slate-600/50"
              onClick={()=>{setBgColor('#373F51')}}
          ></button>
          <button
              className="rounded-md w-8 h-8 bg-[#B91372] cursor-pointer shadow-md shadow-slate-600 border-2 border-slate-600/50"
              onClick={()=>{setBgColor('#B91372')}}
          ></button>
          <bytton
              className="rounded-md w-8 h-8 bg-[#95A3B2] cursor-pointer shadow-md shadow-slate-600 border-2 border-slate-600/50"
              onClick={()=>{setBgColor('#95A3B2')}}
          ></bytton>
        </div>
      </div>
    </div>
  );
}

export default App;
