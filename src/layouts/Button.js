import styled from "styled-components";

const ratio = 1.5;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: row wrap;
  color: white;
  width: 50%;
  height: ${(props) => props.height};
  padding: ${(props) => props.theme.scale(1)};
  background-color: ${(props) => props.theme.primary};
  border: ${(props) => props.theme.scale(-10)};
  border-style: solid;
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.theme.scale(-1)};
  cursor: pointer;
`;

export default Button;
