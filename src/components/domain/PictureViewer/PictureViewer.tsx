import { ImageContainer, ImageSlide } from '@components/domain';
import { IImageView } from '@types';
import { useFetch } from '@hooks/useFetch';
import * as S from './Style';

const PictureViewer = () => {
  const imageViewData = useFetch<IImageView>('dummy.json');
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
