import { ImageBox } from '@components/base';
import { addCommaSecond } from '@utils';
import * as S from './Style';

export interface BubbleProps {
  direction: {
    leftOrRight: 'left' | 'right';
    upOrDown: 'up' | 'down';
  };
  price: number;
  discount: number;
  imageUrl: string;
  title: string;
  isOpen: boolean;
  outside: boolean;
}

const Bubble = ({
  isOpen, // 나중에 제거
  direction,
  price,
  discount,
  imageUrl,
  title,
  outside,
}: BubbleProps) => {
  return (
    <S.BubbleBlock direction={direction} isOpen={isOpen}>
      <ImageBox
        width={70}
        height={70}
        selected={false}
        radius={4}
        imageUrl={imageUrl}
      />
      <S.RightSection>
        <S.Title>{title}</S.Title>
        <S.PriceTab className="price-tab">
          {!outside ? (
            <S.Discount>{discount}%</S.Discount>
          ) : (
            <S.ExpectedPrice>예상가</S.ExpectedPrice>
          )}
          <S.Price className={'price'}>{addCommaSecond(price)}</S.Price>
          <div>{'>'}</div>
        </S.PriceTab>
      </S.RightSection>
    </S.BubbleBlock>
  );
};

export default Bubble;
