import React from "react";
import rojgar from "../images/rojgar.png";

function Header() {
  return (
    <div className="w-100 shadow-md">
      <img src={rojgar} className="h-[60px] sticky" alt="Company Logo" />
    </div>
  );
}

export default Header;
