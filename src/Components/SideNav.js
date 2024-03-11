import React from "react";
import { useNavigate } from "react-router-dom";

function SideNav() {
  let navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/propertydetails");
  };

  return (
    <>
      <div className="text-center col-sm-9 ">
        <button className="btn btn-primary m-5 px-5" onClick={onClickHandler}>
          PropertyInsurance
        </button>
      </div>
    </>
  );
}

export default SideNav;
