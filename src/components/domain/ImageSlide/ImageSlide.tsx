import React, { useEffect, useRef, useState } from 'react';
import { IProduct } from '@types';
import { ImageBox } from '@components/base';
import { useProductState, useSetProduct } from '@contexts/ProductContext';
import { SLIDE } from '@utils';
import * as S from './Style';

interface ImageSlideProps {
  productList: IProduct[];
}

const ImageSlide = ({ productList }: ImageSlideProps) => {
  const setProduct = useSetProduct();
  const selectedProduct = useProductState();
  const slideItemRef = useRef<{ [propsName: string]: HTMLDivElement }>({});
  const sliderRef = useRef<any>();
  const [translateX, setTranslateX] = useState(0);

  const toggleTooltip = (nextProduct: string) => {
    return () => {
      if (nextProduct === selectedProduct) {
        setProduct('');
      } else {
        setProduct(nextProduct);
      }
    };
  };
  const maxTransX =
    Math.floor(productList.length / SLIDE.SCROLL_COUNT) * SLIDE.ITEM_WIDTH +
    SLIDE.PAD;
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [coordinate, setCoordinate] = useState({
    startX: 0,
    distance: 0,
  });

  useEffect(() => {
    const imageElems = Array.from(
      document.querySelectorAll('.slide-item')
    ) as HTMLDivElement[];

    slideItemRef.current = imageElems.reduce((map, $elem) => {
      map[$elem.dataset.name!] = $elem;
      return map;
    }, slideItemRef.current);
  }, []);

  useEffect(() => {
    if (!slideItemRef.current[selectedProduct]) {
      return;
    }
    const transX = slideItemRef.current[selectedProduct]?.offsetLeft;

    setTranslateX(transX);
  }, [selectedProduct]);

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    const { clientX } = e;
    setIsMouseDown(true);
    setCoordinate({ ...coordinate, startX: clientX });
  };
  const handleMouseUp = () => {
    setCoordinate({ distance: 0, startX: 0 });
    setIsMouseDown(false);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!isMouseDown) {
      return;
    }
    setTranslateX(
      coordinate.startX - e.clientX < 0 ? 0 : coordinate.startX - e.clientX
    );
  };

  return (
    <S.ImageSlideBlock ref={sliderRef}>
      <S.SlideWrapper
        translateX={
          -(translateX > maxTransX ? maxTransX : translateX - SLIDE.PAD)
        }
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
