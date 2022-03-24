import { useState, MouseEventHandler } from 'react';
import * as S from './Style';

interface ImageBoxProps {
  width?: number;
  height?: number;
  selected: boolean;
  radius?: number;
  imageUrl: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ImageBox = ({
  width = 106,
  height = 106,
  radius = 16,
  selected,
  imageUrl,
  onClick,
}: ImageBoxProps) => {
  const [startX, setStartX] = useState(0);
  const handleMouseDown = (e: any) => {
    const { clientX } = e;
    setStartX(clientX);
  };
  const handleMouseUp = (e: any) => {
    console.log(e);
    if (Math.abs(startX - e.clientX) < 10 && onClick) {
      onClick(e);
    }
  };
  return (
    <S.ImageBoxBlock
      width={width}
      height={height}
      selected={selected}
      radius={radius}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}>
      <img src={imageUrl} alt="가구 이미지" draggable={false} />
    </S.ImageBoxBlock>
  );
};

export default ImageBox;
