import * as S from './Style';

interface ImageBoxProps {
  width?: number;
  height?: number;
  selected: boolean;
  radius?: number;
  imageUrl: string;
}

const ImageBox = ({
  width = 106,
  height = 106,
  radius = 16,
  selected,
  imageUrl,
}: ImageBoxProps) => {
  return (
    <S.ImageBoxBlock
      width={width}
      height={height}
      selected={selected}
      radius={radius}>
      <img src={imageUrl} alt="가구 이미지" />
    </S.ImageBoxBlock>
  );
};

export default ImageBox;
