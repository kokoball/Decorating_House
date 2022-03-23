import React from 'react';
import { Button } from '@components/base';
import { Bubble } from '@components/base';
import { useSetProduct, useProductState } from '@contexts/ProductContext';
import { IMAGE_WIDTH } from '@utils';
import { TLeftOrRight, TUpOrDown } from '@components/base/Bubble/Bubble';
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
  imageHeight: number;
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
  imageHeight,
}: ToolTipProps) => {
  const setProduct = useSetProduct();
  const selectedProduct = useProductState();

  const leftOrRight: TLeftOrRight = pointY > IMAGE_WIDTH / 2 ? 'right' : 'left';
  const upOrDown: TUpOrDown = pointX < imageHeight / 2 ? 'up' : 'down';

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
