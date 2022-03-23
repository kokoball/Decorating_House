import { IProduct } from '@types';
import { ImageBox } from '@components/base';
import { useProductState, useSetProduct } from '@contexts/ProductContext';
import { useEffect, useRef } from 'react';
import * as S from './Style';

interface ImageSlideProps {
  productList: IProduct[];
}

const ImageSlide = ({ productList }: ImageSlideProps) => {
  const setProduct = useSetProduct();
  const selectedProduct = useProductState();
  const slideItemRef = useRef<{ [propsName: string]: HTMLDivElement }>({});
  const sliderRef = useRef<any>();

  const toggleTooltip = (nextProduct: string) => {
    return () => {
      if (nextProduct === selectedProduct) {
        setProduct('');
      } else {
        setProduct(nextProduct);
      }
    };
  };

  useEffect(() => {
    const imageElems = [
      ...document.querySelectorAll('.slide-item'),
    ] as HTMLDivElement[];

    slideItemRef.current = imageElems.reduce((map, $elem) => {
      map[$elem.dataset.name!] = $elem;
      return map;
    }, slideItemRef.current);
  }, []);

  useEffect(() => {
    const x = slideItemRef.current[selectedProduct]?.getBoundingClientRect().x;
    sliderRef.current.scrollTo(x, 0);
  }, [selectedProduct]);

  return (
    <S.ImageSlideBlock ref={sliderRef}>
      <S.SlideWrapper>
        {productList.map(({ productId, imageUrl, productName }) => (
          <S.SlideItem
            key={productId}
            className={'slide-item'}
            data-name={productName}>
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
