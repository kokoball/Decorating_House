import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  top: 41.1574%;
  left: 19.0909%;
`;

export const Button = styled.button`
  width: 24px;
  height: 24px;
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

export const SpanButton = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  margin: -3px;
  padding: 3px;
  z-index: 1;
`;

export const Svg = styled.svg`
  font-size: 18px;
  color: rgba(53, 197, 240, 0.8);
  transition: color 0.1s;
  position: relative;
  z-index: 2;
`;
