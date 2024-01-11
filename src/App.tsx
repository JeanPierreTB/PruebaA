
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Inicio from './Pages/Inicio/Inicio';
import Preguntas from './Pages/Preguntas/Preguntas';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path='/questions' element={<Preguntas/>}/> 
    </Routes>
   
   </BrowserRouter>
  );
}

export default App;
