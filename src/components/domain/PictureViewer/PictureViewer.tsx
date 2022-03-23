import { ImageContainer, ImageSlide } from '@components/domain';
import { IImageView } from '@types';
import { useFetch } from '@hooks/useFetch';
import * as S from './Style';

const PictureViewer = () => {
  // @NOTE : dummy 데이터
  // const imageViewData = useFetch<IImageView>('dummy.json');
  const imageViewData = useFetch<IImageView>(
    'https://cdn.ggumim.co.kr/test/image_product_link.json'
  );
  return (
    <S.PictureViewerBlock>
      <div>
        {imageViewData && (
          <>
            <ImageContainer imageViewData={imageViewData} />
            <ImageSlide productList={imageViewData.productList} />
          </>
        )}
      </div>
    </S.PictureViewerBlock>
  );
};

export default PictureViewer;
