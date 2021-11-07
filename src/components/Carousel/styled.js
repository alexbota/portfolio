import styled, { keyframes } from 'styled-components';

export const SlideshowContainer = styled.div`
  max-width: 1000px;
  position: relative;
  margin: auto;
`;

const fade = keyframes`
  from {
    opacity: 0.4;
  }

  to {
    opacity:1;
  }
`;

export const MySlide = styled.div`
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  width: 100%;
  height: 350px;
  animation: ${fade} 1.5s;
`;

export const DotContainer = styled.div`
  text-align: center;
`;

export const Dot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: ${(props) => (props.isActive ? '#717171' : '#bbb')};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: #717171;
  }
`;
