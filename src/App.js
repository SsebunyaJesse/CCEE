import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import Conference1 from "./components/Conference1"
import Conference2 from "./components/Conference2"
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import CCEE from './components/CCEE';
function App() {
  return (
    <>
    <Router>
      <CCEE/>

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/events'element={<Events/>}/>
        <Route path='/sponsors' element={<Sponsors/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/conference1' element={<Conference1/>}/>
        <Route path='/conference2' element={<Conference2/>}/>

      </Routes>
      
    </Router>
    </>
  );
}

export default App;
