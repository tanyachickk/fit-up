import React from 'react';
import { withRouter } from 'react-router';
import { Layout, HeaderWrapper, SidebarWrapper, Body } from './Main.styled';
import routes from '@/routes';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import Menu from '@/components/menu';

const Main = (props: any) => (
  <Layout>
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>
    <SidebarWrapper>
      <Sidebar logo='logo' menu={<Menu currentPath={props.location.pathname} routes={routes} />} />
    </SidebarWrapper>
    <Body>{props.children}</Body>
  </Layout>
);

export default withRouter(Main);
