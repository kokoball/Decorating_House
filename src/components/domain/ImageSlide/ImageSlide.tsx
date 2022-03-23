import React from 'react';
import { IProduct } from '@types';
import { ImageBox } from '@components/base';
import { useProductState, useSetProduct } from '@contexts/ProductContext';
import useSlide from './useSlide';
import * as S from './Style';

interface ImageSlideProps {
  productList: IProduct[];
}

const ImageSlide = ({ productList }: ImageSlideProps) => {
  const setProduct = useSetProduct();
  const selectedProduct = useProductState();
  const { handleMouseMove, handleMouseUp, handleMouseDown, translateX } =
    useSlide({ productList, selectedProduct });

  const toggleTooltip = (nextProduct: string) => {
    return () => {
      if (nextProduct === selectedProduct) {
        setProduct('');
      } else {
        setProduct(nextProduct);
      }
    };
  };

  return (
    <S.ImageSlideBlock>
      <S.SlideWrapper
        translateX={-translateX}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        draggable={false}>
        {productList.map(({ productId, imageUrl, productName }) => (
          <S.SlideItem
            key={productId}
            className={'slide-item'}
            data-name={productName}
            draggable={false}>
            <ImageBox
              imageUrl={imageUrl}
              selected={selectedProduct === productName}
              onClick={toggleTooltip(productName)}
            />
          </S.SlideItem>
        ))}
      </S.SlideWrapper>
    </S.ImageSlideBlock>
  );
};

export default ImageSlide;
