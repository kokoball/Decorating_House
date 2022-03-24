import { ImageBox } from '@components/base';
import { addCommaSecond } from '@utils';
import * as S from './Style';

export type TUpOrDown = 'up' | 'down';
export type TLeftOrRight = 'left' | 'right';

export interface BubbleProps {
  direction: {
    leftOrRight: TLeftOrRight;
    upOrDown: TUpOrDown;
  };
  price: number;
  discount: number;
  imageUrl: string;
  title: string;
  isOpen: boolean;
  outside: boolean;
  productId: number;
}

const Bubble = ({
  productId,
  isOpen,
  direction,
  price,
  discount,
  imageUrl,
  title,
  outside,
}: BubbleProps) => {
  const moveToProductPage = () => {
    window.location.href = `https://www.ggumim.co.kr/furniture/view/${productId}`;
  };

  return (
    <S.BubbleBlock
      direction={direction}
      isOpen={isOpen}
      tabIndex={1}
      onClick={moveToProductPage}>
      <ImageBox
        width={80}
        height={80}
        selected={false}
        radius={4}
        imageUrl={imageUrl}
      />
      <S.RightSection>
        <S.Brand>{title.split(' ')[0]}</S.Brand>
        <S.Title>{title}</S.Title>
        <S.PriceTab className="price-tab">
          {!outside ? (
            <S.Discount>{discount}%</S.Discount>
          ) : (
            <S.ExpectedPrice>예상가</S.ExpectedPrice>
          )}
          <S.Price className={'price'}>{addCommaSecond(price)}원</S.Price>
        </S.PriceTab>
      </S.RightSection>
      <S.Arrow>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet">
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M6 19.692L8.25 22 18 12 8.25 2 6 4.308 13.5 12z"></path>
        </svg>
      </S.Arrow>
    </S.BubbleBlock>
  );
};

export default Bubble;
