import React from "react";

function Navigation() {
  return (
    <nav className="container">
      <div className="Logo">
        <img src="/images/brand_logo.png" />
        {/* {console.log(<img src="../images/brand_logo.png" />)} */}
      </div>

      <ul>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button>Login</button>
    </nav>
  );
}

export default Navigation;
