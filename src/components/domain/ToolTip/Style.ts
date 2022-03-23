import styled from 'styled-components';

interface ToolTipProps {
  isOpen: boolean;
  productionName: string;
  imageUrl: string;
  priceDiscount: number;
  discountRate: number;
  outside: boolean;
  pointX: number;
  pointY: number;
}

export const ToolTipBlock = styled.div<Pick<ToolTipProps, 'pointY' | 'pointX'>>`
  position: absolute;
  top: ${({ pointX }) => pointX}px;
  left: ${({ pointY }) => pointY}px;
`;
