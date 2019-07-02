import React from 'react';
import { Container, Content } from './MenuItem.styled';

const Menu = (props: any) => (
  <Container to={props.path}>
    <Content isActive={props.isActive}>{props.title}</Content>
  </Container>
);

export default Menu;
