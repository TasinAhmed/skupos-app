import styled from "styled-components";

interface Props {
  size: string;
  color: string;
}

const Text = styled.p<Props>`
  font-size: ${({ size }) => size || "1rem"};
  color: ${({ color }) => color || "black"};
`;

export default Text;
