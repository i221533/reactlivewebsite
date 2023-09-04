import React from 'react';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
         <Navbar/>
             <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/Service"  element={<Service />} />
            <Route exact path="/About"  element={<About />} />
            <Route exact path="/Contact"  element={<Contact />} />
        </Routes>
        </>
       
    );
}

export default App;
// import {Route,Switch} from 'react-router-dom';
// const App=()=>{

//     return(

//         <>
       
//         <Switch>

       

//         <Route  Path="/"  component={Home} exact/>
        
        
      
//         </Switch>
  
//         </>

      
//     );
// }

// export default App;
