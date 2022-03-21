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
  return (
    <S.ToolTipBlock pointX={pointX} pointY={pointY}>
      <Button />
      {isOpen && (
        <Bubble
          title={'s'}
          imgURL={''}
          discount={10}
          price={1}
          direction={{ upAndDown: 'up', leftAndRight: 'left' }}
        />
      )}
    </S.ToolTipBlock>
  );
};

export default ToolTip;
