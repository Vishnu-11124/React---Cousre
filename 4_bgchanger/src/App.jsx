import { useState } from 'react'
import './index.css'

function App() {
  const [bgColor, setBgColor] = useState('olive')
 

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: bgColor }}>
      <h1 className='header'>BACKGROUND COLOUR CHANGER</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-2 bg-black px-2 py-2 rounded-xl shadow-lg'>
          <button onClick={() => {setBgColor('red')}} className='outline-none px-4 py-1 rounded-full text-white  shadow-lg' style={{backgroundColor:'red'}}>Red</button>
          <button onClick={() => {setBgColor('lavender')}} className='outline-none px-4 py-1 rounded-full text-black  shadow-lg' style={{backgroundColor:'lavender'}}>Lavender</button>
          <button onClick={() => {setBgColor('green')}} className='outline-none px-4 py-1 rounded-full text-white  shadow-lg' style={{backgroundColor:'green'}}>Green</button>
          <button onClick={() => {setBgColor('blue')}} className='outline-none px-4 py-1 rounded-full text-white  shadow-lg' style={{backgroundColor:'blue'}}>Blue</button>
          <button onClick={() => {setBgColor('orange')}} className='outline-none px-4 py-1 rounded-full text-black  shadow-lg' style={{backgroundColor:'orange'}}>Orange</button>
          <button onClick={() => {setBgColor('violet')}} className='outline-none px-4 py-1 rounded-full text-black  shadow-lg' style={{backgroundColor:'violet'}}>Violet</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
