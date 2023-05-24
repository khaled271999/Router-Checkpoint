import './App.css';
import Navigation from './Components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Error from './Pages/Error';
import Trailer from './Pages/Trailer';
import Description from './Pages/Description';




function App() {
 

  
  return (
    <div className="App">
     
     <Navigation/>
        <Routes>
            <Route exact path='/' element={<Home/>}  />
            <Route  path='/ContactUs' element={<ContactUs/>}  />
            <Route  path='/AboutUs' element={<AboutUs/>}  />
            <Route  path='/*' element={<Error/>}  />
            <Route path='/Trailer/:id' element={<Trailer/>}/>
            <Route path='/Description/:id' element={<Description/>}/>
        </Routes> 
    
      
    </div>
  );
}

export default App;
