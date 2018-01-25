import styled from 'styled-components';
import { Primary, Secondary, WEIGHT } from 'utils/typography';
import { black } from 'utils/colors';

export const H1 = styled.h1`
  margin: 0;
  color: ${black};
  font-family: ${Primary};
  font-size: 5rem;
  letter-spacing: -2px;
  line-height: 4.5rem;
  font-weight: ${WEIGHT.bold};
`;

export const Paragraph = styled.p`
  color: ${black};
  font-family: ${Secondary};
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.01rem;
  font-weight: ${WEIGHT.regular};

  a {
    color: ${black};
    font-weight: ${WEIGHT.black};
  }
`;
