import styled, { keyframes } from 'styled-components';

const blinkingBg = keyframes`
0% {
  background-color: #223E98;
}

25% {
  background-color: #006494;
}

50% {
  background-color: #0582CA;
}

75% {
  background-color: #006494;
}

100% {
  background-color: #223E98;
}
`;

export const EmptyPreview = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.5;

  animation: ${blinkingBg} 4s infinite;
`;
