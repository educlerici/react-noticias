import React from "react";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <h2>{props.titulo}</h2>
    </nav>
  );
};

export default Header;
