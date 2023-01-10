import Menu from './components/Menu';
import Q3 from './components/Q3';
import Q4 from './components/Q4';
import Q5 from './components/Q5';
import Q6 from './components/Q6';


import {Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
    <Menu />
    <h1>Correction d'examen de REACT</h1>
    <Routes>
      <Route path='/q3' element={<Q3 />} />
      <Route path='/q3/:annee' element={<Q3 />} />
      <Route path='/q4' element={<Q4 />} />
      <Route path='/q5' element={<Q5 />} />
      <Route path='/q6' element={<Q6 />} />

    </Routes>

    </div>
  );
}

export default App;
