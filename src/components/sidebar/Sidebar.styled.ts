import styled from 'styled-components';
import { HEADER_HEIGHT } from '@/constants/sizes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.05);
`;

export const LogoWrapper = styled.div`
  flex-shrink: 0;
  height: ${HEADER_HEIGHT};
`;

export const MenuWrapper = styled.div`
  flex-grow: 1;
`;
