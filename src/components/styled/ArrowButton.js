import { styled } from "styled-components";

const Arrow = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`;

const UpArrow = styled(Arrow)`
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;

const DownArrow = styled(Arrow)`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const LeftArrow = styled(Arrow)`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

const RightArrow = styled(Arrow)`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

export { UpArrow, DownArrow, LeftArrow, RightArrow };
