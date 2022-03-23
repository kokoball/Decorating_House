import React from 'react';
import { Button } from '@components/base';
import { Bubble } from '@components/base';
import { useSetProduct, useProductState } from '@contexts/ProductContext';
import * as S from './Style';

export interface ToolTipProps {
  productionName: string;
  imageUrl: string;
  priceDiscount: number;
  discountRate: number;
  outside: boolean;
  pointX: number;
  pointY: number;
  productId: number;
}

const ToolTip = ({
  productId,
  priceDiscount,
  productionName,
  imageUrl,
  discountRate,
  outside,
  pointX,
  pointY,
}: ToolTipProps) => {
  const setProduct = useSetProduct();
  const selectedProduct = useProductState();

  const upOrDown = pointY * 1.7 < 450 ? 'up' : 'down';
  const leftOrRight = pointX * 1.6 < 400 ? 'right' : 'left';

  const isOpen = selectedProduct === productionName;

  const toggleTooltip = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setProduct((prevProduct) => {
      return prevProduct === productionName ? '' : productionName;
    });
  };
  return (
    <S.ToolTipBlock pointX={pointX} pointY={pointY}>
      <Button isOpen={isOpen} onClick={toggleTooltip} />
      {isOpen && (
        <Bubble
          productId={productId}
          isOpen={isOpen}
          title={productionName}
          imageUrl={imageUrl}
          discount={discountRate}
          price={priceDiscount}
          direction={{ upOrDown, leftOrRight }}
          outside={outside}
        />
      )}
    </S.ToolTipBlock>
  );
};

export default ToolTip;
