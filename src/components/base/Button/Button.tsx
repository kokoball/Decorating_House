import { MouseEventHandler } from 'react';
import * as S from './Style';

interface ButtonProps {
  onMouseEnter: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ onMouseEnter, onMouseLeave }: ButtonProps) => {
  return (
    <S.ButtonWrapper>
      <S.Button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <S.SpanButton />
        <S.Svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="currentColor"></circle>
          <path
            stroke="#FFF"
            strokeLinecap="square"
            strokeWidth="2"
            d="M12 16V8m-4 4h8"></path>
        </S.Svg>
      </S.Button>
    </S.ButtonWrapper>
  );
};

export default Button;
