/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    padding: 0;
    margin: 0;
  `}
`;
