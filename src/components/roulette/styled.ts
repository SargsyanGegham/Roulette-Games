import styled, { css, keyframes } from "styled-components";

export const Containner = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const turn = (to: number = 360) => keyframes`
  to {
    transform:  translate(-50% , -50%) rotate(${to}deg);
  }
`;
export const BigCycle = styled.section<{ deg: number, start: boolean, }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform:  translate(-50% , -50%);
  animation: ${props => turn(!props.start ? props.deg : 360)} 3s linear ${props => props.start ? 'infinite' : 'forwards'};;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: conic-gradient(red 0deg 45deg, black 45deg 90deg, red 90deg 135deg, black 135deg 180deg, red 180deg 225deg, black 225deg 270deg, red 270deg 315deg, black 315deg 360deg);
  background-size: 100px 100px;
  background-repeat: repeat;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

export const MidCycle = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% , -50%);
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-image: linear-gradient(90deg, silver 10px, black 10px);
  background: conic-gradient(gray 0deg 45deg, black 45deg 90deg, grey 90deg 135deg, black 135deg 180deg, grey 180deg 225deg, black 225deg 270deg, grey 270deg 315deg, black 315deg 360deg);
  background-size: 100px 100px; /* Adjust the size to control the size of the circles */
  box-shadow: inset 0 0 12px 11px rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

export const MinCycle = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% , -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: linear-gradient(90deg, silver 10px, black 10px);
  background: conic-gradient(silver 0deg 45deg, black 45deg 90deg, silver 90deg 135deg, black 135deg 180deg, silver 180deg 225deg, black 225deg 270deg, silver 270deg 315deg, black 315deg 360deg);
  background-size: 100px 100px; /* Adjust the size to control the size of the circles */
  background-repeat: repeat;
  box-shadow: 0 0 12px 11px rgba(0, 0, 0, 0.3);
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    width: 50px;
    height: 50px;
    background: #9592a3f2;
    border-radius: 50%;
    box-shadow: inset 0 0 18px 6px #ed5811;
  }
`;

export const Item = styled.section<{ width: number, deg: number, color }>`
  position: absolute;
  left: calc(50% - ${props => props.width / 2}px);
  bottom: 50%;
  height: 285px;
  width: ${props => props.width}px;
  transform: rotate(${props => props.deg}deg);
  background: ${props => props.color};
  transform-origin: bottom center;
  z-index: 0;
`;

export const Arrow = styled.section`
  position: absolute;
  top: calc(50% - 300px);
  left: 50%;
  transform: translateX(-50%);
  border: 40px solid transparent; 
  border-bottom: 40px solid red;
  z-index: 5;
`;