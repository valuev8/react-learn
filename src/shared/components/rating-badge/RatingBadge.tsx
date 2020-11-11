import React, {FC} from 'react';
import styled from 'styled-components';
import {variables} from '@styles/variables.styles';

type RatingBadgeProps = {
  size?: number;
  rating: number;
};

const StyledBadge = styled.span<RatingBadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-weight: 500;
  font-size: ${(props) => props.size}px;
  width: 55px;
  border-radius: 50%;
  border: 1px solid ${variables.colorSecondary};
  box-shadow: 0 0 10px ${variables.colorSecondary};;
  color: ${(props) => props.rating > 7 ? `${variables.colorSuccess}` : `${variables.colorDanger}`};
`;

const RatingBadge: FC<RatingBadgeProps> = ({size = 16, rating}) => (
  <StyledBadge size={size} rating={rating}> { rating } </StyledBadge>
);

export default RatingBadge;
