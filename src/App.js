import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Rouiting/Home';
import About from './Rouiting/About';
import Project from './Rouiting/Project';

function App() {
  return (
    <div className="Ap">
      <Nav />
      <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Project' element={<Project />} />

      </Routes>
      
    </div>
  );
}

export default App;
