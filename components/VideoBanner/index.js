import styled from 'styled-components';
import Logo from '../Logo';
import Navigation from '../../blocks/Navigation';
import { Flex } from '@rebass/grid';

const Video = styled.video`
  object-position: top center;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  height: 500px;
  position: relative;
  overflow: hidden;

  @media (max-width: 960px) {
    height: 300px;
  }
`;

const ChildrenContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const CommonContainer = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  margin: 16px;

  a {
    color: #fff;
    font-size: 16px;
  }
`;

export default ({ children, video }) => (
  <Container>
    <Video autoPlay loop muted preload="true">
      <source src={video} type="video/mp4" />
    </Video>
    <CommonContainer justifyContent="space-between" alignItems="center">
      <Logo />
      <Navigation />
      <div style={{ width: '231px' }} />
    </CommonContainer>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
  </Container>
);