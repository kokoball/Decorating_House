import React from 'react';
import { IImageView } from '@types';
import { ToolTip } from '@components/domain';
import { useSetProduct } from '@contexts/ProductContext';
import useBoundingRect from '@hooks/useBoundingRect';
import * as S from './Style';

interface ImageContainerProps {
  imageViewData: IImageView;
}

const ImageContainer = ({ imageViewData }: ImageContainerProps) => {
  const { imageUrl, productList } = imageViewData;
  const setProduct = useSetProduct();
  const [rectInfo, callbackRef] = useBoundingRect();
  const { height, heightWeight, widthWeight } = rectInfo;

  const offToolTip = () => {
    setProduct('');
  };

  return (
    <S.ImageContainerBlock onClick={offToolTip}>
      <img src={imageUrl} alt="전체 이미지" ref={callbackRef} />
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
            productId={productId}
            discountRate={discountRate}
            imageUrl={imageUrl}
            priceDiscount={priceDiscount}
            outside={outside}
            productionName={productName}
            pointX={pointX * heightWeight}
            pointY={pointY * widthWeight}
            imageHeight={height}
          />
        )
      )}
    </S.ImageContainerBlock>
  );
};

export default ImageContainer;
