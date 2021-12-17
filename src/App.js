import './App.css';
import BlocT from './components/blocs/BlocT';
import OccupationT from './components/occupations/OccupationT';
import NavBar from './components/partials/NavBar';
import { Routes, Route, Link } from "react-router-dom";
import SalleT from './components/salles/SalleT';
import ChronoT from './components/chronos/ChronoT';
function App() {
  return (


    <div className="App">
      <NavBar></NavBar>
      <div className='container mt-5'>
        <Routes>
          <Route path='/' element={<BlocT/>}/>
          <Route element={BlocT}/>
          <Route path='/occupation' element={<OccupationT/>}/>
          <Route path='/salle' element={<SalleT/>}/>
          <Route path='/chrono' element={<ChronoT/>}/>
        </Routes>
      </div>
      
    </div>
  
  );
}

export default App;
