import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, useParams, Route } from "react-router-dom";
import { theme } from "./styles/theme";
import questions from "../data/mock";
import Answers from "./components/Answers";
import Body from "./layouts/Body";
import Stack from "./layouts/Stack";
import Question from "./components/Question";
import { SectorProvider, useSector } from "./context";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Stack space={1} align="center">
          {questions.map((q) => (
            <Fragment key={q}>
              <Question text={q.text} />
              <Answers options={q.options} />
            </Fragment>
          ))}
        </Stack>
      </Body>
    </ThemeProvider>
  );
}
