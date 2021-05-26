import Link from 'next/link';
import React from 'react';
import { HeaderStyled } from './HeaderStyled';

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <Link href={'/posts/new'}>
        <a>New Post</a>
      </Link>
    </HeaderStyled>
  );
};
