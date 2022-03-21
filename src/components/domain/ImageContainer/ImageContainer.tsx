import React, { useEffect, useState } from 'react';
import { IImageView } from '@types';
import { ToolTip } from '@components/domain';
import * as S from './Style';

const ImageContainer = () => {
  const [test, setTest] = useState<IImageView>();
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch('dummy.json');
      const data = await response.json();
      setTest(data);
    };
    fetchAPI();
  }, []);

  return (
    <S.ImageContainerBlock>
      {test && (
        <>
          <img src={test.imageUrl} alt="전체 이미지" />
          {test.productList.map(
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
                isOpen={false}
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
        </>
      )}
    </S.ImageContainerBlock>
  );
};

export default ImageContainer;
