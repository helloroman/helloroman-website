import styled from 'styled-components';
import { background_light, background_dark } from 'utils/colors';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(335deg, ${background_dark}, ${background_light});
`;

export const TextWrapper = styled.div`
  width: 400px;
  margin-right: 70px;
`;

export const BlobWrapper = styled.div`
  width: 350px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    width: 100%;
  }
`;
