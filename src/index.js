import React from "react";
import { render } from "react-dom";
import Textblock from "./Textblock";
import styled from "react-emotion";

const Container = styled("div")(props => ({
  display: "flex",
  flexDirection: props.flexboxType ? props.flexboxType : "row",
  flexWrap: props.wrap ? props.wrap : "wrap",
  justifyContent: props.justify ? props.justify : "space-around"
}));

const App = () => (
  <Container flexboxType="column" wrap="nowrap" justify="space-between">
    <Textblock />
    <Textblock name="Dez Bryant" position="WR" />
  </Container>
);

render(<App />, document.getElementById("root"));
