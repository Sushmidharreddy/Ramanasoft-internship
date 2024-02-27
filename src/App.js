import './App.css';
import PropertyDetails from './Components/PropertyDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RenderComponets from './Components/RenderComponets';
import QuotePage from './Components/QuotePage';

function App() {
  return (
 <>  
 <div>
     
 <Router>
      <Routes>
              <Route exact path="/" element={<RenderComponets/>}></Route>
              <Route path='/propertydetails' element={<PropertyDetails/>}></Route>
              <Route path='/quotepage/' element={<QuotePage/> }></Route>
         </Routes>
  </Router>
  </div> 
 
    
   
  </>
  );
}

export default App;
