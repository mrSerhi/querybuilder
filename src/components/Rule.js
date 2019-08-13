import React from "react";

const Rule = () => {
  return (
    <div style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}>
      <select>
        <option value="first name">First name</option>
        <option value="last name">Last name</option>
        <option value="age">Age</option>
        <option value="gender">Gender</option>
      </select>
      <select>
        <option value="=">&#61;</option>
        <option value="!=">!=</option>
        <option value="<">&#60;</option>
        <option value=">">&#62;</option>
      </select>
      <input type="text" style={{ width: "150px" }} />
      <button>x</button>
    </div>
  );
};

export default Rule;
