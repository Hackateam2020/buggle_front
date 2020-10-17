import styled from "styled-components";

const ratio = 1.5;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: row wrap;
  color: white;
  width: ${(props) => props.theme.scale(5)};
  height: ${(props) => props.height};
  padding: ${(props) => props.theme.scale(1)};
  margin: 0 ${(props) => props.theme.scale(-1)};
  background-color: ${(props) =>
    props.value ? props.theme.positive : props.theme.negative};
  border-radius: ${(props) => props.theme.scale(-1)};
  cursor: pointer;
`;

export default Button;
