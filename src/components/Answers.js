import React from "react";
import Button from "../layouts/Button";
import Stack from "../layouts/Stack";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

export default function Answers({ options }) {
  const answers = options.map((option) => (
    <div key={option.text}>
      <Button variant="contained" color="primary" disableElevation>
        {option.text}
      </Button>
    </div>
  ));
  return (
    <Stack space={1} justify="center" align="center">
      <Container>
        <Button value={true}>Si</Button>
        <Button value={false}>No</Button>
      </Container>
    </Stack>
  );
}
