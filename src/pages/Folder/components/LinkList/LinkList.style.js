import styled from 'styled-components';
import { onPc } from 'styles/mediaQuery';

export const ContentContainer = styled.main`
  padding: 2rem 3.2rem;

  ${onPc} {
    margin: 0 auto;
    width: 115rem;
  }
`;

export const NoLink = styled.section`
  margin-top: 13rem;
  text-align: center;
  height: 50vh;
  font-size: 1.4rem;
  font-weight: 400;
`;
