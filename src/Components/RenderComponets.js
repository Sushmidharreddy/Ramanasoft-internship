import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import LoginForm from "./LoginForm";
import Explanation from "./Explanation";
import pic from "./Images/Insurance-PNG-Images.png";


function RenderComponets() {
  return (
  
   <>
      <div className="image-container">
        <Header />
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-9  mb-5 ">
              <SideNav />
            </div>
            <div className="col-lg-3">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 ">
        <div className="row">
          <div className="col-lg-8 ">
            <Explanation />
          </div>
          <div className="col-lg-4 container">
            <img src={pic} alt="side photo" />
          </div>
        </div>
      </div>

      <footer className="bg-dark py-2 text-center">
        <h5 className="text-light">All Rights Reserved 2024 &copy; RS Insurance Company, Hyderabad</h5>
      </footer>
      
     
    </>
    
  );
}

export default RenderComponets;
