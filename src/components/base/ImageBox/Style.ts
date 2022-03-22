import styled from 'styled-components';

interface ImageBoxProps {
  width: number;
  height: number;
  selected: boolean;
  radius: number;
}

export const ImageBoxBlock = styled.div<Omit<ImageBoxProps, 'imageUrl'>>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ selected }) =>
    selected
      ? `
  background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);  
  border-radius: 18px; 
  padding: 2px;`
      : ``};
  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ radius }) => radius}px;
    border: 0.5px solid white;
  }
`;
