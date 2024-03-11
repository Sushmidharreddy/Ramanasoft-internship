import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './Images/Ramanasoftlogo.jpg'; 



function Payment() {
  
  
  const {state}=useLocation();
  const userDetails=state.fullDetails;
  const amounts=state.totalPrimum;
  const amount=amounts*100;
  console.log(amounts)

  let navigate = useNavigate();

  const handleSubmit=()=>
  {
    if(true)
    {
    const options=
     {
      key:'rzp_test_Su4WV4zdBIGTmZ',
      key_secret:'EmH6eToe5CvCfAfgfADREv3C',
      amount: amount, // Amount in paise (e.g., 1000 paise = â‚¹10)
      name: 'RS Insurance Company',
      description: 'Product/Service Description',
      image: logo,
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        navigate("/");
        
      },
      prefill: {
        name: userDetails.fullName,
        email: userDetails.email,
        contact: userDetails.mobile,
      },
      notes: {
        address: userDetails.propertyflatNbr+" ," + userDetails.propertyStreet+" ,"+userDetails.propertyPincode,
  
       
      },
      theme: {
        color: '#F37254',
      },
    };
    var pay=new window.Razorpay(options);
    pay.open();
  }
  }

  const[selectedOption, setSelectedOption] =useState('');

  const isButtonDisabled = selectedOption === ''  ;

  const radioHandleClick=(e)=>
  {
    setSelectedOption(e.target.value)

  }

  


  console.log(userDetails.fullName)
  console.log(userDetails.email)
  console.log(userDetails.mobile)
  console.log(userDetails.propertyflatNbr+" ," + userDetails.propertyStreet+" ,"+userDetails.propertyPincode)
  
return (
    <>
    {/* <Razorpay options={handleSubmit.options}/> */}
    <div className='bg-dark p-1 text-center text-light'>
              <h2>Payment Details</h2>
        </div>
    <div className='container'>
       

        <div  className='m-5'>
          <h4 className='text-primary'>Please Choose Your Payment Method: </h4>
          
        </div>
        </div>
   {/* <div className='center-wrapper'><button className='btn btn-success center-wrapper m-5 center-wrapper' onClick={handleSubmit}>Payment</button></div>
        */}
        <div className='text-center'>
          <input type='radio' id='paymentMethod2' name='paymentMethod' value='yes' onChange={radioHandleClick} className='cursor-pointer' /><b className='me-5'>Razorpay</b>
          <input type='radio' id='paymentMethod2' name='paymentMethod' value='' onChange={radioHandleClick}/><b>Others</b>
        </div>

          <div className='center-wrapper'><button className='btn btn-success center-wrapper m-5 center-wrapper' onClick={handleSubmit} disabled={isButtonDisabled} >Payment</button></div>
       
   </>
  );
}

  //   </>
  // );


export default Payment;
