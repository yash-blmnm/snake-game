import { keyframes, styled } from "styled-components";
import EachCell from "./EachCell";
import { CELL_TYPE } from "../features/Game/Board/ActiveBoard/constants";

const slidein = keyframes`
0% {
    margin-left: -100%;
}
100% {
    margin-left: 100%;
}
`;

const AnimationWrapper = styled.div`
  display: flex;
  animation: 3s linear 1s infinite running ${slidein};
`;

const SnakeAnimation = () => {
  return (
    <AnimationWrapper>
      {Array(3)
        .fill(1)
        .map((val, idx) => (
          <EachCell cellType={CELL_TYPE.snake} />
        ))}
    </AnimationWrapper>
  );
};

export default SnakeAnimation;
