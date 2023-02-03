 import React from "react";

const Footer = () => {
  var d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © GEOTARA{" "}{" "}
          {d.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
