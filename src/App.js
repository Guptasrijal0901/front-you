// import Navbar from './Components/Navbar';
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
      <Route exact path='/create' element= {<Create/>}/>
      <Route exact path='/all' element= {<Read/>}/>
      <Route exact path='/update' element= {<Update/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;
