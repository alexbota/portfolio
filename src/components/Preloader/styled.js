import styled, { keyframes } from 'styled-components';

const progress = keyframes`
  from {
    width: 0px;
  }

  to {
    width: 100%;
  }
`;

export const Progressbar = styled.div`
  height: 100%;
  background: #2196f3;
  position: relative;
  animation: ${progress} 2.5s linear;
`;
