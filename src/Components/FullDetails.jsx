import React, { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {fullName_validation, pancard_validation, pincode_validation, flatNo_validation, street_validation } from './Regex';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";



function FullDetails() {

  const { state } = useLocation();
  const signupdate =state.signups 
  const formdata = state.formdata
  const premium=state.premium
  const year= state.year
  // console.log(state)

  // console.log(signupdate.email)

  const totalPrimum=premium*year;

 
  const [fullDetails,setFullDetailss]=useState(
    {
      gender:"",
      fullName:"",
      pancard: "",
      dob: "",
      email:signupdate.email,
      mobile:signupdate.mobile,
      address:"",
      propertyPincode:"",
      propertyflatNbr:"",
      propertyStreet:"",
      presentStreet: "",
      presentflatNbr:"",
      presentPincode:""


    })

    const[fullDetailsError, setFullDetailsError]=useState({
      gender:"",
      fullName:"",
      pancard: "",
      dob: "",
      xyz:false,
      address:"",
      propertyPincode:"",
      propertyflatNbr:"",
      propertyStreet:"",
      presentStreet: "",
      presentPincode:"",
      presentflatNbr:""
    })

    
  
    const onChangeHandler=(e)=>
    {
      const name=e.target.name;
      const val=e.target.value;
      setFullDetailss({...fullDetails,[name]:val})
   

      if(name==="address")
      {
        if(val==="yes")
            setFullDetailss({...fullDetails,[name]:val,xyz:false})
        else
            setFullDetailss({...fullDetails,[name]:val,xyz:true});
      }

      else if(name==="fullName")
      {
        if(fullName_validation.test(val))
          setFullDetailsError({...fullDetailsError,[name]:""})
        else
          setFullDetailsError({...fullDetailsError,[name]:"Space Accept only in between two words"})
      }

      else if(name==="pancard")
      {
        if(pancard_validation.test(val))
          setFullDetailsError({...fullDetailsError,[name]:""})
        else
          setFullDetailsError({...fullDetailsError,[name]:"Invalid (Alphabets should be Uppercase letters)"})
        console.log(pancard_validation.test(val))
      }
      else if(name==="propertyPincode")
      {
        if(pincode_validation.test(val))
          setFullDetailsError({...fullDetailsError,[name]:""})
        else 
          setFullDetailsError({...fullDetailsError,[name]:"Invalid Pincode"})

        console.log(pincode_validation.test(val))
      }

      else if(name==='propertyflatNbr')
      {
        if(flatNo_validation.test(val))
          setFullDetailsError({...fullDetailsError,[name]:""})
        else
          setFullDetailsError({...fullDetailsError,[name]:"Invalid"})
      }
      else if(name==='propertyStreet')
      {
        if(street_validation.test(val))
          setFullDetailsError({...fullDetailsError,[name]:""})
        else
          setFullDetailsError({...fullDetailsError,[name]:"Invalid"})
      }

      else if(name ==="presentPincode")
      {
        if(pincode_validation.test(val))
          setFullDetailsError({...fullDetailsError,[name]:""})
        else
          setFullDetailsError({...fullDetailsError,[name]:"Invalid Pincode"})
      }
      else if(name==='presentflatNbr')
      {
        if(flatNo_validation.test(val))
          setFullDetailsError({...fullDetailsError,[name]:""})
        else
          setFullDetailsError({...fullDetailsError,[name]:"Invalid"})
      }
      else if(name==='presentStreet')
      {
        if(street_validation.test(val))
          setFullDetailsError({...fullDetailsError,[name]:""})
        else
          setFullDetailsError({...fullDetailsError,[name]:"Invalid"})
      }

  }

  const today = new Date();
  const minDate = new Date(today.getFullYear() - 21, today.getMonth(), today.getDate());

  const minDateFormatted = minDate.toISOString().split('T')[0];

  // // State to manage the minimum date
  // const [minDateValue, setMinDateValue] = useState(minDateFormatted);
  let navigate =useNavigate();

  const editHandler=(e)=>
  {
    e.preventDefault();
    navigate("/propertyDetails")
  }

  const submitHandler=(e)=>
  {
    e.preventDefault();
    sessionStorage.setItem("fullDetails", JSON.stringify(fullDetails));
    if(fullDetails.address==="yes")
    {
      if(fullName_validation.test(fullDetails.fullName) && pincode_validation.test(fullDetails.propertyPincode) && pancard_validation.test(fullDetails.pancard) && flatNo_validation.test(fullDetails.propertyflatNbr) && street_validation.test(fullDetails.propertyStreet))
      {
        navigate("/paymentpage",{state:{fullDetails, totalPrimum}}); 
      }
    }
    else if(fullDetails.address==="no")
    {
      if(fullName_validation.test(fullDetails.fullName) && pincode_validation.test(fullDetails.propertyPincode) && pancard_validation.test(fullDetails.pancard) && flatNo_validation.test(fullDetails.propertyflatNbr) && street_validation.test(fullDetails.propertyStreet) &&  flatNo_validation.test(fullDetails.presentflatNbr) && street_validation.test(fullDetails.presentStreet))
        {
          navigate("/paymentpage",{state:{fullDetails, totalPrimum}});
        }
      
    }
    // else{
    //   alert("dkjfh")
    // }

    // navigate("/paymentpage");
  }

  // console.log(fullDetails.address)

  useEffect(() => {
    // Retrieve form data from session storage when the component mounts
    const storedFormData = sessionStorage.getItem("fullDetails");
    if (storedFormData) {
      setFullDetailss(JSON.parse(storedFormData));
    }
  }, []);

  console.log(fullDetails.address==="yes")
  console.log(pancard_validation.test(fullDetails.pancard))
  console.log(fullName_validation.test(fullDetails.fullName))
  console.log(pincode_validation.test(fullDetails.propertyPincode))

  

  return (
    <>
    <div className='bg-dark '>
            <h4 className=' p-2 text-center text-light fw-bold font-monospace'>Fill the below Details to Continue</h4>
    </div>
    <div className='container my-3'>
        

      <div className='row '>
      <div className='col-lg-3 mt-3 border-end border-dark border-2  '>
        <span className='ms-4 fw-bold '><u>Your Details as follows,{" "} </u> <span onClick={editHandler} className="custom-cursor">
              {" "}
              <FontAwesomeIcon icon={faPenToSquare} />
            </span></span>
        <table>
        <tbody>
        <tr><td><h6 className='my-3 ms-4 '>PropertyValue: <span className='text-primary'>{formdata.valueofproperty}</span></h6></td></tr>
        <tr><td><h6 className='my-3 ms-4 '>Carpet Value:<span className='text-primary'> {formdata.carpetarea}(sqft)</span></h6></td></tr>     
        <tr><td><h6 className='my-3 ms-4 '>Primium Amount for {year} year{year > 1 && "'s"}: <span className='text-primary'>{totalPrimum}/-</span></h6></td></tr>      
        </tbody>
        </table>
        </div>

      <div className='col-lg-9 '>
        
        <div className='container mt-3 '>
        
      <form className=' ' onSubmit={submitHandler}>
       <div className=''>
        <table className=''>
          <tbody >
          <tr>
            <td colSpan="2"><header className=' '>
            <h5 className='ms-3 text-primary fw-bold'>Personal Details:</h5><hr/>
                </header></td>
          </tr>
            <tr>
              <td><label htmlFor='gender' className='fw-bold m-3 '>Full Name(as per pancard):<span className='text-danger'>*</span></label></td>
             <td><select name="gender" id='gender' value={fullDetails.gender} onChange={onChangeHandler}  className='p-1 fullField rounded fw-bold' >
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Ms">Ms</option>
              </select>
              <input type='text' name='fullName' id='fullName' value={fullDetails.fullName} onChange={onChangeHandler} className='ms-1 rounded fw-bold p-1' autoComplete='off'required /><br/>
              {fullDetailsError.fullName && (<span className='text-danger fullField '>{fullDetailsError.fullName}</span>)}</td> 
            </tr>
            <tr>
              <td><label htmlFor='pancard' className='fw-bold m-3'>Enter PanCard Number:<span className='text-danger'>*</span></label></td>
              <td><input type='text' id="pancard" name='pancard' value={fullDetails.pancard} onChange={onChangeHandler}  className='p-1 fullField rounded fw-bold' autoComplete='off' maxLength={10} required />
              <br/>{fullDetailsError.pancard &&(<span className='text-danger'>{fullDetailsError.pancard}</span>)}</td>
            </tr>
            <tr>
              <td><label htmlFor='dob' className="fw-bold m-3">Date of Birth(as per pancard):<span className='text-danger'>*</span> </label></td>
              <td><input type='date' name='dob' id='dob' max={minDateFormatted}  value={fullDetails.dob} onChange={onChangeHandler} className='p-1 fullField rounded fw-bold dropDownlen' autoComplete='off'  required/> <br/>  <p className='text-warning'> Note:Applicant must be 21 years old</p></td>
            

            </tr>
            <tr>
              <td><label htmlFor='email' className='fw-bold m-3'>Email:<span className='text-danger'>*</span></label></td>
              <td><input type='text' id='email'  name='email' value={fullDetails.email} readOnly  className='p-1 fullField rounded fw-bold '  autoComplete='off' required/></td>
            </tr>
            <tr>
              <td><label htmlFor='mobile' className='fw-bold m-3'>Mobile:<span className='text-danger'>*</span></label></td>
              <td><input type='text' id='mobile' name='mobile' value={fullDetails.mobile} readOnly className='p-1 fullField rounded fw-bold'  autoComplete='off' required/></td>
            </tr>
            
            {/* {/* {/* </tbody>
            </table> 
            </div>  */}

            <tr><td colSpan="2">
            <header className=''>
            <h5 className='ms-3 text-primary fw-bold'>Property Details:</h5> <hr/>
            </header></td>
            </tr>
           
          {/* <table className=' '>
          <tbody >
          <div className=''> */}
          <tr><td><span><u>Property Address:</u></span></td></tr>
            <tr>
              <td><label htmlFor='propertyPincode' className='fw-bold m-3'>Pincode:<span className='text-danger'>*</span></label></td>
              <td><input type='text' id='propertyPincode' name='propertyPincode' value={fullDetails.propertyPincode} onChange={onChangeHandler} className='p-1 rounded fw-bold fullField2' autoComplete='off' maxLength={6} required/><br/>
              {fullDetailsError.propertyPincode && (<span className='text-danger fullField2'>{fullDetailsError.propertyPincode}</span>)}</td>
            </tr>
            
            <tr>
              
              <td><label htmlFor='propertyflatNbr' className='fw-bold m-3'>Flat No/House No:<span className='text-danger'>*</span> </label></td>
              <td><input type='text' id='propertyflatNbr' name='propertyflatNbr' value={fullDetails.propertyflatNbr}onChange={onChangeHandler} className='p-1 rounded fw-bold fullField2' autoComplete='off' required/><br/>
              {fullDetailsError.propertyflatNbr && (<span className='text-danger fullField2'>{fullDetailsError.propertyflatNbr}</span>)}
          </td>
            </tr>
            <tr>
              <td><label htmlFor='propertyStreet' className='fw-bold  m-3'>Area/street:<span className='text-danger'>*</span></label></td>
              <td><input type='text' id='propertyStreet' name='propertyStreet' value={fullDetails.propertyStreet} onChange={onChangeHandler} className='p-1  rounded fw-bold fullField2' autoComplete='off'  required/>
              <br/>{fullDetailsError.propertyStreet&&<span className='text-danger'>{fullDetailsError.propertyStreet}</span>}</td>
            
            </tr>
            <tr>
              <td><label htmlFor='address' className='fw-bold m-3'>Is the address mentioned aboved is your current address:<span className='text-danger'>*</span></label></td>
              <td><select id='address' name='address' className='p-1 rounded fw-bold fullField2 dropDownlen' value={fullDetails.address} onChange={onChangeHandler}  autoComplete='off' required >
                  <option value="">select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
              </select></td>
            </tr>
            
            {fullDetails.xyz && (
            <>
              <tr><td><span><u>Current Address:</u></span></td></tr>
           <tr>
              <td><label htmlFor='presentPincode' className='fw-bold m-3'>Pincode: <span className='text-danger'>*</span></label></td>
              <td><input type='text' id='presentPincode' name='presentPincode' value={fullDetails.presentPincode} onChange={onChangeHandler}  className='p-1 rounded fw-bold fullField3' autoComplete='off' maxLength={6} required/>
              <br/>{fullDetailsError.presentPincode && (<span className='text-danger fullField3'>{fullDetailsError.presentPincode}</span>)}</td>
            </tr>
            <tr>
              <td><label htmlFor='presentflatNbr' className='fw-bold m-3'>Flat No/House No:<span className='text-danger'>*</span> </label></td>
              <td><input type='text' id='presentflatNbr' name='presentflatNbr' className='p-1 rounded fw-bold fullField3' value={fullDetails.presentflatNbr} onChange={onChangeHandler} autoComplete='off' required/>
            <br/>{fullDetailsError.presentflatNbr && (<span className='text-danger'>{fullDetailsError.presentflatNbr}</span>)}</td>
            </tr>
            <tr>
              <td><label htmlFor='presentStreet' className='fw-bold m-3'>Area/street: <span className='text-danger'>*</span></label></td>
              <td><input type='text' id='presentStreet' name='presentStreet' value={fullDetails.presentStreet} onChange={onChangeHandler}  className='p-1 rounded fw-bold fullField3' autoComplete='off' required />
              <br/>{fullDetailsError.presentStreet&& <span className='text-danger'>{fullDetailsError.presentStreet}</span>}</td>
            </tr>
        </> )}
         
          </tbody>
          </table>
          </div>
         <div className='center-wrapper'><button className='ms-5 btn btn-success mt-5' >Procced to Pay</button></div> 
      </form>
   
        </div>
        </div>
      </div>
      </div>

      {/* Another UI */}

          {/* <div className=' container my-3 text-center '><h5 className='p-2 rounded bg-warning'>Fill the below Details to Continue</h5> </div>
          <div className='container rounded  w-75'>
          <form className='form form-control p-2 '>
            <header className=' '>
              <h5 className='text-info'>Personal Details:</h5><hr/>
            </header>

            <label className='fw-bold'> Fullname:<span className='text-danger'>*</span></label>
            <input type='text' name='fullName' className='form-control mb-3' autoComplete='off' required/>

            <label className='fw-bold' >PanCard Number:<span className='text-danger'>*</span></label>
            <input type='text' name='pancard'  className='form-control mb-3' autoComplete='off' required  />

            <label className='fw-bold'>Date of Birth:<span className='text-danger'>*</span></label>
            <input type='date' name='dob'  className='form-control mb-3' autoComplete='off' required />
          
            <label className='fw-bold'>Email:<span className='text-danger'>*</span></label>
            <input type='text' name='email'className='form-control mb-3' autoComplete='off' required/>
          
            <label className='fw-bold'>Mobile:<span className='text-danger'>*</span></label>
            <input type='text' name='mobile'   className='form-control mb-3'   autoComplete='off' required/>

            <header className=''>
            <h5 className='text-primary'>PropertyDetails:</h5> <hr/>
            </header>

            <label className='fw-bold'>Property Pincode:<span className='text-danger'>*</span></label>
            <input type='text' name='pincode'  className='form-control mb-3' autoComplete='off' required />
      
            <label className='fw-bold'>Flat No/House No:<span className='text-danger'>*</span></label>
            <input type='text' name='faltNbr'  className='form-control mb-3' autoComplete='off' required />
  
            <label  className='fw-bold'>Area/street:<span className='text-danger'>*</span></label>
            <input type='text' name='street' className='form-control mb-3' autoComplete='off' required />

            <label htmlFor='address' className='fw-bold'>Is the address mentioned aboved is your current address:</label>
              <select id="address" name="address"  onChange={addressHandler} className='form-control mb-3'  required >
                  <option value=''>select</option>
                  <option value='yes'>Yes</option>
                  <option value='No'>No</option>
              </select>
              { fullDetails.address && ( <div>
            <label className='fw-bold'>Property Pincode:<span className='text-danger'>*</span></label>
            <input type='text' name='pincode'  className='form-control mb-3' autoComplete='off' required />
      
            <label className='fw-bold'>Flat No/House No:<span className='text-danger'>*</span></label>
            <input type='text' name='faltNbr'  className='form-control mb-3' autoComplete='off' required />
  
            <label  className='fw-bold'>Area/street:<span className='text-danger'>*</span></label>
            <input type='text' name='street' className='form-control mb-5' autoComplete='off'  maxLength={10} required /> </div>)}
  
            <div className='center-wrapper'><button  className='btn btn-success me-5'  >Continue</button></div>
          </form>
        </div> */}
    </>
  );
}

export default FullDetails;
