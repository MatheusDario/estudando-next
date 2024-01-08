"use client";

import P from 'prop-types';
import * as Styled from './styled';

export const Home = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Title>{children}</Styled.Title>
    </Styled.Container>
  );
};

Home.propTypes = {
  children: P.node.isRequired,
};
