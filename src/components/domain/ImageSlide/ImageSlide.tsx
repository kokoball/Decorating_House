import { IProduct } from '@types';
import { ImageBox } from '@components/base';
import { useProductState, useSetProduct } from '@contexts/ProductContext';
import * as S from './Style';

interface ImageSlideProps {
  productList: IProduct[];
}

const ImageSlide = ({ productList }: ImageSlideProps) => {
  const setProduct = useSetProduct();
  const selectedProduct = useProductState();

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
      <S.SlideWrapper>
        {productList.map(
          ({ productId, imageUrl, discountRate, productName }) => (
            <S.SlideItem key={productId}>
              <ImageBox
                imageUrl={imageUrl}
                selected={selectedProduct === productName}
                onClick={toggleTooltip(productName)}
              />
            </S.SlideItem>
          )
        )}
      </S.SlideWrapper>
    </S.ImageSlideBlock>
  );
};

export default ImageSlide;
