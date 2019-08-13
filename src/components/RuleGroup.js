import React from "react";
import Rule from "./Rule";

const RuleGroup = () => {
  return (
    <div style={{ padding: "0.5rem" }}>
      <div>
        <select>
          <option>And</option>
          <option>Or</option>
        </select>

        <button>+Rule</button>

        <button>+Group</button>
      </div>

      <Rule />
      <Rule />
      <Rule />
    </div>
  );
};

export default RuleGroup;
