import styled from 'styled-components';
import { Button } from '@components/base';
import { Bubble } from '@components/base';
import * as S from './Style';

interface ToolTipProps {
  isOpen: boolean;
  productionName: string;
  imageUrl: string;
  priceDiscount: number;
  discountRate: number;
  outside: boolean;
}

const ToolTip = ({
  isOpen,
  priceDiscount,
  productionName,
  imageUrl,
  outside,
}: ToolTipProps) => {
  return (
    <S.ToolTipBlock>
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
