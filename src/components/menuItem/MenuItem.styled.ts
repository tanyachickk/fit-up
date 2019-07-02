import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { DARK_GRAY, VIOLET_RGB } from '@/constants/colors';

interface Props {
  isActive: boolean;
}

export const Container = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${DARK_GRAY};
  padding: 1rem 2rem;

  ${(props: Props) =>
    props.isActive &&
    css`
      color: white;
      background: linear-gradient(118deg, rgba(${VIOLET_RGB}, 1), rgba(${VIOLET_RGB}, 0.6));
    `}
`;
