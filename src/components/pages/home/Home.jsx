import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [value,setValue] = useState()
    const navigate = useNavigate()
    const handleClick = useCallback( ()=>{
        navigate(`/room/${value}`)
    },[navigate,value]) 
  return (
   <>
   <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Enter room code' />
   <button  onClick={handleClick}>Join</button>
   
   </>
  )
}

export default Home
