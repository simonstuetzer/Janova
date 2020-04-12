import React from "react";
import Container from "@material-ui/core/Container";

export default function Track(props) {
  return (
    <Container className="trackContaier" disableGutters={true}>
      <div className="trackTable" />
    </Container>
  );
}
