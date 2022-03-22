import { IProduct } from '@types';
import { ImageBox } from '@components/base';
import * as S from './Style';

interface ImageSlideProps {
  productList: IProduct[];
}

const ImageSlide = ({ productList }: ImageSlideProps) => {
  return (
    <S.ImageSlideBlock>
      <S.SlideWrapper>
        {productList.map((product) => (
          <S.SlideItem key={product.productId}>
            <ImageBox imageUrl={product.imageUrl} selected={false} />
          </S.SlideItem>
        ))}
      </S.SlideWrapper>
    </S.ImageSlideBlock>
  );
};

export default ImageSlide;
