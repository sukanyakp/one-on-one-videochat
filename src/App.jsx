import {Routes, Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Room from "./components/pages/room/Room"

const App = () => {
  return (
   <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/room/:roomId" element = {<Room/>} />
   </Routes>
  )
}

export default App
