import styled from "styled-components";

interface Props {
  fill?: string;
  color?: string;
  padding?: string;
  border?: string;
  size?: string;
}

const Button = styled.button<Props>`
  border: none;
  outline: none;
  background: ${({ fill }) => fill || "#00b481"};
  color: ${({ color }) => color || "#fff"};
  padding: ${({ padding }) => padding || "1.5rem 2.5rem"};
  border: ${({ border }) => border || "none"};
  border-radius: 100px;
  font-size: ${({ size }) => size || "1.6rem"};
  font-weight: 600;
  cursor: pointer;
`;

export default Button;
