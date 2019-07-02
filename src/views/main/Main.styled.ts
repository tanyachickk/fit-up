import styled from 'styled-components';
import { MAIN_BG } from '@/constants/colors';
import { SIDEBAR_WIDTH, HEADER_HEIGHT } from '@/constants/sizes';

export const Layout = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: ${MAIN_BG};
  font-family: 'Montserrat', sans-serif;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: ${SIDEBAR_WIDTH};
  height: ${HEADER_HEIGHT};
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${SIDEBAR_WIDTH};
`;

export const Body = styled.div`
  padding-top: ${HEADER_HEIGHT};
  padding-left: ${SIDEBAR_WIDTH};
`;
