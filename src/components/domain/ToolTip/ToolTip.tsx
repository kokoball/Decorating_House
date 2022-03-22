import { Button } from '@components/base';
import { Bubble } from '@components/base';
import { useSetProduct, useProductState } from '@contexts/ProductContext';
import * as S from './Style';

export interface ToolTipProps {
  productionName: string;
  imageUrl: string;
  priceDiscount: number;
  discountRate: number;
  outside: boolean;
  pointX: number;
  pointY: number;
}

const ToolTip = ({
  priceDiscount,
  productionName,
  imageUrl,
  discountRate,
  outside,
  pointX,
  pointY,
}: ToolTipProps) => {
  const setProduct = useSetProduct();
  const selectedProduct = useProductState();

  const upOrDown = pointY * 1.7 < 450 ? 'up' : 'down';
  const leftOrRight = pointX * 1.6 < 400 ? 'right' : 'left';

  const isOpen = selectedProduct === productionName;

  const toggleTooltip = () => {
    setProduct(productionName);
  };
  return (
    <S.ToolTipBlock pointX={pointX} pointY={pointY}>
      <Button isOpen={isOpen} onMouseDown={toggleTooltip} />
      {isOpen && (
        <Bubble
          isOpen={isOpen}
          title={productionName}
          imageUrl={imageUrl}
          discount={discountRate}
          price={priceDiscount}
          direction={{ upOrDown, leftOrRight }}
          outside={outside}
          onBlur={() => setProduct('')}
        />
      )}
    </S.ToolTipBlock>
  );
};

export default ToolTip;
