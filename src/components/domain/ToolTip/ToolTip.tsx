import { Button } from '@components/base';
import { Bubble } from '@components/base';
import * as S from './Style';

export interface ToolTipProps {
  isOpen: boolean;
  productionName: string;
  imageUrl: string;
  priceDiscount: number;
  discountRate: number;
  outside: boolean;
  pointX: number;
  pointY: number;
}

const ToolTip = ({
  isOpen,
  priceDiscount,
  productionName,
  imageUrl,
  discountRate,
  outside,
  pointX,
  pointY,
}: ToolTipProps) => {
  const upOrDown = pointX < 400 ? 'up' : 'down';
  const leftOrRight = pointY < 400 ? 'left' : 'right';
  return (
    <S.ToolTipBlock pointX={pointX} pointY={pointY}>
      <Button />
      {isOpen && (
        <Bubble
          title={productionName}
          imageUrl={imageUrl}
          discount={discountRate}
          price={priceDiscount}
          direction={{ upOrDown, leftOrRight }}
        />
      )}
    </S.ToolTipBlock>
  );
};

export default ToolTip;
