import "./App.css";
import PropertyDetails from "./Components/PropertyDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RenderComponets from "./Components/RenderComponets";
import QuotePage from "./Components/QuotePage";
import FullDetails from "./Components/FullDetails";
import Payment from "./Components/Payment";


function App() {
  return (
    
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<RenderComponets />}></Route>
            <Route path="/propertydetails" element={<PropertyDetails />}></Route>
            <Route path="/quotepage/" element={<QuotePage />}></Route>
            <Route path="/fullDetails" element={<FullDetails />}></Route>
            <Route path="/paymentpage" element={<Payment/>}></Route>
            {/* <Route path="/Razorpay" element= {<Razorpay options={options}/>}></Route> */}
          </Routes>
        </Router>
       
      </div>
     
    
  );
}

export default App;
