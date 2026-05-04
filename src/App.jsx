import { useState } from 'react'
import './App.css'
import CourseProgress from './Components/CourseProgress'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <CourseProgress/>
 </>
  )
}

export default App
