import React from "react";
import { render } from "react-dom";
import Textblock from "./Textblock";
import styled, { css } from "react-emotion";

const Container = styled("div")(props => ({
  display: "flex",
  flexDirection: props.flexboxType ? props.flexboxType : "row",
  flexWrap: props.wrap ? props.wrap : "wrap",
  justifyContent: props.justify ? props.justify : "space-around"
}));

const successButton = css`
  color: green;
  font-weight: 600;
  background: orange;
`;

const buttonStyles = css`
  color: purple;
  height: 60px;
  width: 100px;
  font-family: "Josefin Sans", sans-serif;
`;

const cancelButton = css`
  ${buttonStyles};
  background: black;
  color: red;
  font-weight: 600;
`;

const App = () => (
  <Container>
    <button
      className={css`
        ${buttonStyles} ${successButton};
      `}
    >
      Click to proceed!
    </button>
    <button className={`${cancelButton}`}>Click here to exit!</button>
  </Container>
);

render(<App />, document.getElementById("root"));
