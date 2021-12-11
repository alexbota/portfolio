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
  height: 480px;
  animation: ${fade} 1.5s;
`;

export const DotContainer = styled.div`
  text-align: center;
`;

export const Dot = styled.span`
  position: relative;
  flex: 0 1 auto;
  width: 40px;
  height: 4px;
  margin-right: 5px;
  margin-left: 5px;
  text-indent: -999px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#717171' : '#bbb')};
  display: inline-block;
  transition: background-color 0.6s ease;

  &:hover {
    background-color: #717171;
  }

  &:after {
    position: absolute;
    top: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: '';
  }

  &:before {
    position: absolute;
    bottom: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: '';
  }
`;
