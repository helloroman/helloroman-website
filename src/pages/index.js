import React from 'react';
import { injectGlobal } from 'styled-components';
import blob_1 from 'assets/img/blob_1.svg';
import blob_2 from 'assets/img/blob_2.svg';

import {
  MainWrapper,
  InnerWrapper,
  TextWrapper,
  BlobWrapper,
} from 'components/wrappers';
import { H1, Paragraph } from 'components/text';

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    background: white;
  }
  
  *{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
`;

const IndexPage = () => (
  <MainWrapper>
    <InnerWrapper>
      <TextWrapper>
        <H1>
          hello,<br />roman
        </H1>
        <Paragraph>
          Front-end developer & creative copywriter sounds like crazy fusion for
          you? It should probably. But if you’re looking for someone who knows
          how to connect innovative ideas with technology, then your should
          definitely click <a href="#">here.</a>
        </Paragraph>
      </TextWrapper>
      <BlobWrapper>
        <img src={blob_1} />
        <img src={blob_2} />
      </BlobWrapper>
    </InnerWrapper>
  </MainWrapper>
);

export default IndexPage;
