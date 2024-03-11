import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleXmark,
  faEye,
  faEyeSlash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  email_validation,
  fullName_validation,
  mobile_validation,
  name_validation,
  password_validation,
} from "./Regex";

function QuotePage() {
  const { state } = useLocation();
  const formdata = state.propertyDetails;

  // const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const [popup, setPopup] = useState();

  const calculateBaseRate = () => {
    return formdata.securitycheck === "notSecured" ? 0.002 : 0.001;
  };

  const handlePop = () => {
    setPopup(true);
  };

  const propertyValue = formdata.valueofproperty;
  const buildingAge = formdata.ageofthebuilding;
  const secuityCheck = formdata.securitycheck;
  const CarpetArea = formdata.carpetarea;
  // let baseRate = formdata.securitycheck === "notSecured" ? 0.002 : 0.001;
  const [year, setYear] = useState("1");

  const defaultpremium = (e) => {
    setYear(1);

    let baseRate = calculateBaseRate();

    if (buildingAge === "5-10 years") baseRate -= 0.0001;
    else if (buildingAge === "10-15 years") baseRate -= 0.0002;
    else if (buildingAge === "15-20 years") baseRate -= 0.0003;

    return Math.floor(propertyValue * baseRate);

    // if(formdata.securitycheck==="notSecured")
    //   setPremium(Math.floor(propertyValue*0.002));
    // else
    //   setPremium(Math.floor(propertyValue*0.001));
  };

  const [premium, setPremium] = useState();

  useEffect(() => {
    // Calculate and set premium when component mounts or when formdata or propertyValue changes
    setPremium(defaultpremium());
  }, [formdata, propertyValue]);

  const firstYearPremimum = (e) => {
    setYear(1);
    let baseRate = calculateBaseRate();

    if (buildingAge === "5-10 years") baseRate -= 0.0001;
    else if (buildingAge === "10-15 years") baseRate -= 0.0002;
    else if (buildingAge === "15-20 years") baseRate -= 0.0003;

    setPremium(Math.floor(propertyValue * baseRate));

    console.log(baseRate);
    console.log(Math.floor(propertyValue * baseRate));

    // if(formdata.securitycheck==="notSecured")
    //   setPremium(Math.floor(propertyValue*0.002));
    // else
    //   setPremium(Math.floor(propertyValue*0.001));
  };

  const secondYearPremimum = (e) => {
    setYear(2);
    let baseRate = calculateBaseRate();
    if (buildingAge === "0-5 years") baseRate -= 0.0001;
    else if (buildingAge === "5-10 years") baseRate -= 0.0002;
    else if (buildingAge === "10-15 years") baseRate -= 0.0003;
    else if (buildingAge === "15-20 years") baseRate -= 0.0004;

    setPremium(Math.floor(propertyValue * baseRate));
    console.log(baseRate);
    // if(formdata.securitycheck==="notSecured")
    //   setPremium(Math.floor(propertyValue*0.0019));
    // else
    //   setPremium(Math.floor(propertyValue*0.00095));
  };

  const thirdYearPremimum = (e) => {
    setYear(3);
    let baseRate = calculateBaseRate();
    if (buildingAge === "0-5 years") baseRate -= 0.0002;
    else if (buildingAge === "5-10 years") baseRate -= 0.0003;
    else if (buildingAge === "10-15 years") baseRate -= 0.0004;
    else if (buildingAge === "15-20 years") baseRate -= 0.0005;

    setPremium(Math.floor(propertyValue * baseRate));
    // if(formdata.securitycheck==="notSecured")
    //   setPremium(Math.floor(propertyValue*0.0018));
    // else
    //   setPremium(Math.floor(propertyValue*0.0009));
  };

  const fourthYearPremimum = (e) => {
    setYear(4);
    let baseRate = calculateBaseRate();
    if (buildingAge === "0-5 years") baseRate -= 0.0003;
    else if (buildingAge === "5-10 years") baseRate -= 0.0004;
    else if (buildingAge === "10-15 years") baseRate -= 0.0005;
    else if (buildingAge === "15-20 years") baseRate -= 0.0006;

    setPremium(Math.floor(propertyValue * baseRate));
    // if(formdata.securitycheck==="notSecured")
    //   setPremium(Math.floor(propertyValue*0.0017));
    // else
    //   setPremium(Math.floor(propertyValue*0.00085));
  };

  const fifthYearPremimum = (e) => {
    setYear(5);
    let baseRate = calculateBaseRate();
    if (buildingAge === "0-5 years") baseRate -= 0.0004;
    if (buildingAge === "5-10 years") baseRate -= 0.0005;
    else if (buildingAge === "10-15 years") baseRate -= 0.0006;
    else if (buildingAge === "15-20 years") baseRate -= 0.0007;

    setPremium(Math.floor(propertyValue * baseRate));

    // if(formdata.securitycheck==="notSecured")
    //   setPremium(Math.floor(propertyValue * 0.0016));
    // else
    //   setPremium(Math.floor(propertyValue * 0.0008));
  };

  const [signups, setSignups] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [signupError, setSignupError] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setSignups({ ...signups, [name]: val });

    if (name === "name") {
      if (!fullName_validation.test(val)) {
        setSignupError({
          ...signupError,
          [name]: "Only Alphabets are allowed",
        });
      } else setSignupError({ ...signupError, [name]: "" });
      console.log(!name_validation.test(val));
    }

    if (name === "email") {
      if (!email_validation.test(val)) {
        setSignupError({ ...signupError, [name]: "Invalid email address" });
      } else {
        setSignupError({ ...signupError, [name]: "" });
      }
      console.log(!email_validation.test(val));
    }

    if (name === "mobile") {
      if (!mobile_validation.test(val)) {
        setSignupError({ ...signupError, [name]: "Invalid mobile number" });
      } else {
        setSignupError({ ...signupError, [name]: "" });
      }
    }
    // console.log(val);
    // console.log(mobile_validation.test(val));

    if (name === "password") {
      if (!password_validation.test(val)) {
        setSignupError({ ...signupError, [name]: "password strength is weak" });
      } else {
        setSignupError({ ...signupError, [name]: "" });
      }
      console.log(password_validation.test(val));
    }
  };

  // const [loginpopup, setLoginpopup] = useState();

  const signinpopupHandler = (e) => {
    e.preventDefault();
    // setLoginpopup(true);
    setPopup(false);
  };

  // const closeHandler = () => {
  //   setLoginpopup(false);
  // };

  // const closeHandler2 = () => {
  //   setPopup(false);
  // };

  // const signinpopupHandler2 = (e) => {
  //   // e.preventDefault();
  //   setLoginpopup(false);
  //   setPopup(true);
  // };

  let navigate = useNavigate();

  const editPropertyDetails = (e) => {
    e.preventDefault();
    navigate("/propertydetails");
  };

  const afterSignUp = (e) => {
    e.preventDefault();
    if (
      fullName_validation.test(signups.name) &&
      email_validation.test(signups.email) &&
      mobile_validation.test(signups.mobile) &&
      password_validation.test(signups.password)
    ) {
      navigate("/fullDetails", {
        state: { signups, formdata, premium, year },
      });
      e.preventDefault();
    }
  };

  return (
    <>
     <div className="text-light text-center p-1 bg-dark">
          <h3 className="ms-3">Premium Details</h3>
        </div>
      <div className="container mt-3">
       
        {/* <div className="m-5">
          <h5>
            Your propertyvalue {propertyValue},{" "}
            <span onClick={editPropertyDetails} className="custom-cursor">
              {" "}
              <FontAwesomeIcon icon={faPenToSquare} />
            </span>
          </h5>
        </div> */}
        <div>
        <button className='btn btn-warning fw-bold px-3' onClick={editPropertyDetails}>Back</button>
          <h3 className="text-center m-5 text-info">
           Please Choose Your Plan.......!!!
          </h3>
        </div>
        <div className="row mt-3">
          <div className="col">
            <button
              className="btn btn-primary fw-bold"
              onClick={firstYearPremimum}
            >
              1Year
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-primary fw-bold"
              onClick={secondYearPremimum}
            >
              2Years
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-primary fw-bold"
              onClick={thirdYearPremimum}
            >
              3Years
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-primary fw-bold"
              onClick={fourthYearPremimum}
            >
              4Years
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-primary fw-bold"
              onClick={fifthYearPremimum}
            >
              5Years
            </button>
          </div>
        </div>

        {/* <div className="">
          <div className=" ">
            <div className="text-center mt-5 rounded p-ms-3 primium-bg w-50 mx-auto  ">
              <h4 className="d-inline-block ">Premuim for per year: </h4>
              <div className="border border-dark border-2 ms-2 rounded primum-box d-inline-block my-2 ">
                <h3 className="text-center">{premium}</h3>
              </div>
              <h4 className="d-inline-block">
                Premuim for {year} year{year > 1 && "'s"}:
              </h4>
              <div className="border border-dark border-2 ms-2 rounded primum-box d-inline-block m-5 ">
                <h3 className="text-center">{premium * year}</h3>
              </div>
            </div> */}
        
        <table className="table table-bordered mt-5 me-5 text-center">
          <thead>
            <tr>
              <th>PropertyValue</th>
              <th>CarpetArea(sqft)</th>
              <th>Age of the Building</th>
              <th>24*7 Secuity</th>
              <th>No of Years</th>
              <th>Premium Amount</th>
              <th>
                Total Premium Amount for {year} year{year > 1 && "'s"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{propertyValue}</td>
              <td>{CarpetArea}</td>
              <td>{buildingAge}</td>
              <td>{secuityCheck}</td>
              <td>{year}</td>
              <td>{premium}</td>
              <td>{premium * year}</td>
            </tr>
          </tbody>
        </table>
     
        {/* {/* </div>
        </div> */}
      </div>

      <div className="center-wrapper">
        <button className="btn btn-success px-3 m-5" onClick={handlePop}>
          Procced
        </button>
      </div>
      {/* SignUpPopUp */}
      {popup && (
        <div>
          <div className="popup-back">
            <div className="popup-signup rounded border border-dark border-2  ">
              <div className="text-end">
                <span
                  className="text-danger  border-dark border-1 rounded-circle text-end me-1 custom-cursor"
                  onClick={signinpopupHandler}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </span>
              </div>
              <div className="text-center text-success fw-bold">
                <h6 className="">SignUp to Create New Account....!!!!</h6>
              </div>
              <form className="container p-5 my-3 pt-2" onSubmit={afterSignUp}>
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <lable htmlFor="name" className="fw-bold">
                          Name:<span className="text-danger">*</span>
                        </lable>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="off"
                          value={signups.name}
                          onChange={onChangeHandler}
                          className="p-1 rounded pe-5 "
                          required
                        />
                        <br />
                        {signupError.name && (
                          <span className="text-danger">
                            {signupError.name}
                          </span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="mobile" className="fw-bold">
                          Mobile:<span className="text-danger">*</span>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="mobile"
                          name="mobile"
                          autoComplete="off"
                          value={signups.mobile}
                          onChange={onChangeHandler}
                          maxLength={10}
                          className="p-1 rounded pe-5 "
                          required />
                        <br />
                        {signupError.mobile && (
                          <span className="text-danger">
                            {signupError.mobile}
                          </span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="email" className="fw-bold">
                          Email:<span className="text-danger">*</span>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          autoComplete="off"
                          value={signups.email}
                          onChange={onChangeHandler}
                          className="p-1 rounded pe-5 "
                          required
                        /><br/>{" "}
                        {signupError.email && (
                          <span className="text-danger">
                            {signupError.email}
                          </span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="password" className="fw-bold">
                          New Password:<span className="text-danger">*</span>
                        </label>
                      </td>
                      <td>
                        <input
                         type={showPassword ? 'text' : 'password'}
                          id="password"
                          name="password"
                          autoComplete="off"
                          value={signups.password}
                          onChange={onChangeHandler}
                          className="rounded  p-1 pe-5"
                          required
                        />
                        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          onClick={togglePasswordVisibility} className='icon '/>
                        <br/>
                        {signupError.password && (
                          <span className="text-danger">
                            {signupError.password}
                          </span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="center-wrapper mt-3">
                  <button
                    className="btn btn-success px-3 "
                   
                  >
                    SignUp
                  </button>
                </div>
                {/* <div className="mt-3 text-center myText">
                  {" "}
                  If you have already an account please{" "}
                  <a href="" onClick={signinpopupHandler2}>
                    Login!!
                  </a>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      )}
      {/* // loginpopup */}
      {/* {popup && (
        <div className="popup-back">
          <div className="popup-signup rounded border border-dark border-2 ">
            <div className="text-end">
              <span
                className="text-danger  border-dark border-1 rounded-circle text-end me-1 custom-cursor"
                onClick={closeHandler2}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
              </span>
            </div>
            <form className="text-center mx-5 my-3 ">
              <h3 className="text-center text-success">Login</h3>
              <input
                type="text"
                name="username"
                placeholder="Username....."
                autoComplete="off"
                className="m-2 p-1 rounded largeTextField"
                required
              />{" "}
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password....."
                autoComplete="off"
                className=" m-2 p-1 rounded largeTextField"
                required
              />{" "}
              <br />
              <button className="btn btn-success px-4 rounded m-2">Login</button>
              <div>
                If you don't have an Account{" "}
                <a href="" onClick={signinpopupHandler}>
                  SignUp
                </a>
              </div>
            </form>
          </div>
        </div>
      )} */}
    </>
  );
}

export default QuotePage;
