import React from 'react';
import MenuItem from '@/components/menuItem';
import { Wrapper } from './Menu.styled';

const Menu = (props: any) => (
  <Wrapper>
    {props.routes.map((route: any, i: number) => (
      <MenuItem key={i} isActive={route.path === props.currentPath} {...route} />
    ))}
  </Wrapper>
);

export default Menu;
