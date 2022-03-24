import styled from 'styled-components';

interface ImageBoxProps {
  width: number;
  height: number;
  selected: boolean;
  radius: number;
}

export const ImageBoxBlock = styled.div<
  Omit<ImageBoxProps, 'imageUrl' | 'onClick'>
>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ selected }) => (selected ? `box-shadow: 0 0 0 2px #6cd5f4;` : ``)};

  border-radius: 18px;
  padding: 1px;
  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ radius }) => radius}px;
  }
  &:hover {
    cursor: pointer;
  }
`;
