// import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/header/Home';
import Layout from './Components/Layouts/Layout';

function App() {
  // const [count, setCount] = useState(0)

  return (
<>
<Router>
  <Layout/>
  <Routes>
    <Route path='/' Component={Home}/>
   
  </Routes>
</Router>
</>      
  )
}

export default App
