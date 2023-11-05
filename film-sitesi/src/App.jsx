import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import HomePage from './Components/HomePage';
import WatchList from './Components/WatchList';
import Watched from './Components/Watched';
import Add from './Components/Add';
import "./lib/fontawesome/css/all.min.css";


function App() {

  return (
    <>
    <Router>
    <Header/>
<Routes>
  <Route path='/' Component={HomePage}/>
  <Route path='watchlist' Component={WatchList}/>
  <Route path='watched' Component={Watched}/>
  <Route path='add' Component={Add}/>

  
</Routes>
    </Router>
    </>
  )
}

export default App
