import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Header } from './Header/Header';

interface LayoutTypes {
  title?: string;
  children: React.ReactNode;
}

const ContentWrapper = styled.div`
  max-width: 500px,
  margin: 0 auto
`;

export const MainLayout: React.FC<LayoutTypes> = ({ children, title }: LayoutTypes) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};
