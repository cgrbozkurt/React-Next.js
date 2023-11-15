import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Details from './Components/Details/Details';

function App() {
  return (

    <>
         <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
          </Routes>
        </Router></>
      
  );
}

export default App;
