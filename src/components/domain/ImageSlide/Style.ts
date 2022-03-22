import styled from 'styled-components';

export const ImageSlideBlock = styled.div`
  display: flex;
  width: 800px;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
`;
export const SlideWrapper = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`;

export const SlideItem = styled.li`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
`;
