import * as S from './Style';

interface ImageBoxProps {
  width: number;
  height: number;
  selected: boolean;
  radius: number;
}

const ImageBox = ({
  width = 106,
  height = 106,
  radius = 16,
  selected,
}: ImageBoxProps) => {
  return (
    <S.ImageBoxBlock
      width={width}
      height={height}
      selected={selected}
      radius={radius}>
      <img
        src="https://cdn.ggumim.co.kr/cache/furniture/300/20220110174102naCtctXTxY.png"
        alt="가구 이미지"
      />
    </S.ImageBoxBlock>
  );
};

export default ImageBox;
