import { ImageBox } from '@components/base';
import { addCommaSecond } from '@utils';
import { FocusEventHandler, useEffect, useRef } from 'react';
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
  onBlur: FocusEventHandler<HTMLDivElement>;
}

const Bubble = ({
  isOpen,
  direction,
  price,
  discount,
  imageUrl,
  title,
  outside,
  onBlur,
}: BubbleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [isOpen]);

  return (
    <S.BubbleBlock
      direction={direction}
      isOpen={isOpen}
      tabIndex={1}
      ref={ref}
      onBlur={onBlur}>
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
