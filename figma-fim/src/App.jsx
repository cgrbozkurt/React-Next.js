// import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  // const [count, setCount] = useState(0)

  return (
<>
<Router>
  <Routes>
    <Route path='/' Component={Home}/>
   
  </Routes>
</Router>
</>      
  )
}

export default App
