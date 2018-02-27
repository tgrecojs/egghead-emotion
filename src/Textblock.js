import React from "react";

export default ({ name = "Dak Prescott", position = "QB" }) => (
  <div>
    <h1>Name: {name}!</h1>
    <p>
      Position: <b>{position}</b>
    </p>
  </div>
);
