import React from 'react';
import { Wrapper, LogoWrapper, MenuWrapper } from './Sidebar.styled';

export default (props: any) => (
  <Wrapper>
    <LogoWrapper>{props.logo}</LogoWrapper>
    <MenuWrapper>{props.menu}</MenuWrapper>
  </Wrapper>
);
