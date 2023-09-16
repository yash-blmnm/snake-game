import { styled } from "styled-components";

const HeadingBanner = styled.div`
  font-size: 72px;
  font-weight: 700;
  text-align: center;
  color: ${({ textColor }) => textColor};
`;

export default HeadingBanner;
