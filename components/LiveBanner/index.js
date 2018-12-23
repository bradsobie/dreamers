import styled from 'styled-components';
import { Flex } from '@rebass/grid';

const Banner = styled(Flex)`
  width: 100%;
  height: 50px;
  background-color: #333;
  color: #fff;
  font-weight: 500;
`;

export default () => (
  <Banner justifyContent="center" alignItems="center">
    We're live!
  </Banner>
);