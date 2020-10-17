import styled from "styled-components";

const ratio = 1.5;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: row wrap;
  color: ${(props) => props.theme.text};
  width: 50%;
  height: ${(props) => props.height};
  padding: ${(props) => props.theme.scale(3)};
  background-color: ${(props) => props.theme.textBackground};
  min-height: ${(props) => props.theme.scale(props.minHeight) || "auto"};
  border-radius: ${(props) => props.theme.scale(-1)};
  cursor: ${(props) => (props.button ? "pointer" : "initial")};
`;

export default Box;
