import React from 'react';
import { IImageView } from '@types';
import { ToolTip } from '@components/domain';
import * as S from './Style';

interface ImageContainerProps {
  imageViewData: IImageView;
}

const ImageContainer = ({ imageViewData }: ImageContainerProps) => {
  const { imageUrl, productList } = imageViewData;

  return (
    <S.ImageContainerBlock>
      <img src={imageUrl} alt="전체 이미지" />
      {productList.map(
        ({
          discountRate,
          productId,
          productName,
          priceDiscount,
          outside,
          imageUrl,
          pointX,
          pointY,
        }) => (
          <ToolTip
            key={productId}
            discountRate={discountRate}
            imageUrl={imageUrl}
            priceDiscount={priceDiscount}
            outside={outside}
            productionName={productName}
            pointX={pointX}
            pointY={pointY}
          />
        )
      )}
    </S.ImageContainerBlock>
  );
};

export default ImageContainer;