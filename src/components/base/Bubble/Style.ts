import styled from 'styled-components';
import { BubbleProps } from './Bubble';

export const BubbleBlock = styled.div<
  Pick<BubbleProps, 'direction' | 'isOpen'>
>`
  position: absolute;
  z-index: 1000;
  ${({ direction }) =>
    direction.upOrDown === 'up' ? `top: 25px;` : 'top: -128px;'}
  ${({ direction }) =>
    direction.leftOrRight === 'left' ? `left: -30px;` : 'left: -205px;'}
  
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;

  width: 260px;
  height: 96px;
  padding: 8px 8px 10px 8px;
  margin-top: 16px;

  -webkit-box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);

  font-size: 14px;
  color: #4a4a4a;

  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
  background-color: hsla(0, 0%, 100%, 0.86);
  color: #fff;
  border-radius: 4px;
  ::before {
    content: '';
    position: absolute;
    border-color: rgba(255, 255, 255, 0.95) transparent;
    border-style: solid;
    ${({ direction }) =>
      direction.upOrDown === 'up'
        ? `border-width: 0 8px 8px;`
        : 'border-width: 8px 8px 0;'}
    display: block;
    z-index: 1;
    ${({ direction }) =>
      direction.leftOrRight === 'left' ? 'left: 34px;' : 'right: 34px;'}
    ${({ direction }) =>
      direction.upOrDown === 'up' ? 'top: -8px;' : 'bottom: -8px;'}
  }
  &:hover {
    cursor: pointer;
  }
`;

export const RightSection = styled.div`
  margin-left: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const Brand = styled.div`
  margin: 0 0 2px;
  font-size: 11px;
  line-height: 17px;
  color: #757575;
`;

export const Title = styled.div`
  display: -webkit-box;
  font-weight: bold;
  width: 130px;
  height: 36px;
  font-size: 12px;
  line-height: 18px;
  color: #292929;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PriceTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ExpectedPrice = styled.span`
  line-height: 1.2em;
  color: #898f94;
  font-size: 11px;
  font-weight: bold;
  margin-right: 4px;
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  font-weight: 800;
  line-height: 17px;
  color: #292929;
  margin-left: 10px;
`;

export const Discount = styled.span`
  color: #ff585d;
  margin-right: 4px;
  line-height: 1.2em;
  font-size: 16px;
  font-weight: bold;
`;

export const Arrow = styled.div`
  flex: 0 0 auto;
  margin-left: 6px;
  color: #757575;
`;
