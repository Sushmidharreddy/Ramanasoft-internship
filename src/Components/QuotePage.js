import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function QuotePage() {

  const {state}=useLocation();
  const formdata=state.propertyDetails;
  const s =formdata.valueofproperty;

 const secuiry= formdata.securitycheck==="notSecured" ? 0.002 : 0.001;

  const [year,setYear] =useState('1') 

  
  const [premium,setPremium]=useState(Math.floor(s*secuiry))
  
  const firstYearPremimum=(e)=>
  {
    setYear(1);
    if(formdata.securitycheck==="notSecured")
      setPremium(Math.floor(s*0.002));
    else
      setPremium(Math.floor(s*0.001));
    

  }

  const secondYearPremimum=(e)=>
  {
    setYear(2);
    if(formdata.securitycheck==="notSecured")
      setPremium(Math.floor(s*0.0019));
    else
      setPremium(Math.floor(s*0.00095));
  }

  const thirdYearPremimum=(e)=>
  {
    setYear(3);
    if(formdata.securitycheck==="notSecured")
      setPremium(Math.floor(s*0.0018));
    else
      setPremium(Math.floor(s*0.0009));
    
  }

  const fourthYearPremimum=(e)=>
  {
    setYear(4);
    if(formdata.securitycheck==="notSecured")
      setPremium(Math.floor(s*0.0017));
    else
      setPremium(Math.floor(s*0.00085));
   
  }

  const fifthYearPremimum=(e)=>
  {
    setYear(5);
    if(formdata.securitycheck==="notSecured")
      setPremium(Math.floor(s * 0.0016));
    else
      setPremium(Math.floor(s * 0.0008));
  }

// function calculatePremium(propertyValue, securityCheck, ageOfTheBuilding) {
//   let baseRate = securityCheck === 'notSecured' ? 0.002 : 0.001;

//   if (securityCheck === 'secured') {
//     baseRate -= 0.001;
//   }

//   if (ageOfTheBuilding === '10') {
//     baseRate -= 0.0001;
//   } else if (ageOfTheBuilding === '15') {
//     baseRate -= 0.0002;
//   } else if (ageOfTheBuilding === '20') {
//     baseRate -= 0.0002;
//   }

//   return Math.floor(propertyValue * baseRate);
// }

// const handlePremiumCalculation = (year) => {
//   setYear(year);
//   setPremium(calculatePremium(s, formdata.securitycheck, formdata.ageofthebuilding));
// };

  return (
    <>
      <div className='container  mt-3'>
        <div className='rounded text-light p-1 bg-success'>
        <h3 className='ms-3'>Premium Details</h3>
        </div>
        <div className='m-5'>
          <h5>Your propertyvalue {s},</h5> 
        </div>
        <div className='row mt-3 ms-5'>
          <div className='col'><button className='btn btn-primary  px-3 fw-bold' onClick={firstYearPremimum}>1 Year</button></div>
          <div className='col'><button className='btn btn-secondary px-3 fw-bold' onClick={secondYearPremimum}>2 Years</button></div>
          <div className='col'><button className='btn btn-info px-3 fw-bold' onClick={thirdYearPremimum}>3 Year</button></div>
          <div className='col'><button className='btn btn-warning px-3 fw-bold' onClick={fourthYearPremimum}>4 Years</button></div>
          <div className='col'><button className='btn btn-success px-3 fw-bold' onClick={fifthYearPremimum}>5 Years</button></div>
        </div>
        <div className='text-center mt-5 rounded p-3 primium-bg w-50 '>
        <h4 className='d-inline-block'>Premuim for {year} year's: </h4>
          <div className='border border-dark border-2 ms-2 rounded primum-box d-inline-block '>
              <h3 className='text-center'>{premium}</h3>
          </div>
          <span className='ms-2 fw-bold'>per year</span> 
        </div>
        </div>
        
     
    </>
  );
}

export default QuotePage;
