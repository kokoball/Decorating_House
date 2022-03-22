import { ImageContainer, ImageSlide } from '@components/domain';
import { IImageView } from '@types';
import { useFetch } from '@hooks';
import * as S from './Style';

const PictureViewer = () => {
  const imageViewData = useFetch<IImageView>('dummy.json');
  return (
    <S.PictureViewerBlock>
      {imageViewData && (
        <>
          <ImageContainer imageViewData={imageViewData} />
          <ImageSlide productList={imageViewData.productList} />
        </>
      )}
    </S.PictureViewerBlock>
  );
};

export default PictureViewer;
