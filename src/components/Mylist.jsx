import React from "react";
import "./Mylist.css";

function Mylist() {
  const items = ["Open Discussion", "Refreshment Trip Arrangement", "Provide peace Accomodation ", "Sea fish and Organic Food"];

  return (
    <div className="mylist-container">
      <h2>Monir's Clinical Service</h2>
      <ul className="mylist">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Mylist;
