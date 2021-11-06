import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  height: 36px;
  -webkit-transform: translate3d(0, 0, 0); /* The zoom: 1; of new browsers */
  span {
    height: 2px;
    width: 50px;
    background: ${(props) =>
      props.isOpen
        ? props.theme.colors.background.primary
        : props.theme.colors.background.secondary};
    display: block;
    opacity: 1;
    -webkit-transition: -webkit-transform 0.15s linear;
    -o-transition: -o-transform 0.15s linear;
    -ms-transition: -ms-transform 0.15s linear;
    -moz-transition: -moz-transform 0.15s linear;
    transition: transform 0.15s linear;
    -webkit-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  span:nth-child(1) {
    margin-bottom: 6px;
  }

  span:nth-child(2) {
    margin-top: 6px;
  }

  ${(props) =>
    !props.isOpen &&
    css`
      &:hover {
        span:nth-child(1) {
          margin-bottom: 2px;
        }
        span:nth-child(2) {
          margin-top: 2px;
        }
      }
    `}

  ${(props) =>
    props.isOpen &&
    css`
      &:hover {
        span:nth-child(1) {
          transform: rotate(30deg);
        }
        span:nth-child(2) {
          transform: rotate(-30deg) translate3d(8px, -6px, 0);
        }
      }
    `}

  ${(props) =>
    props.isOpen &&
    css`
      span:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      span:nth-child(2) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg) translate3d(8px, -6px, 0);
      }
    `}
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.3rem;
  list-style: none;
  transition: 0.3s;

  span {
    height: 5px;
    background: ${(props) => props.theme.colors.text.primary};
    width: 100%;
    display: block;
    right: 99%;
    will-change: transform;
    transform: translate(-100%, 0%) translate3d(0px, 0px, 0px);
    transition: 1s;
  }
  &:hover {
    transform: translateX(0);
    span {
      transform: translate(0%, 0%) translate3d(0px, 0px, 0px);
    }
  }
`;
