import { Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Media from 'react-media';
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
  height: ${props => props.containerHeight || '300px'};
  position: relative;
  overflow: hidden;

  @media (max-width: 960px) {
    height: ${props => props.mobileContainerHeight || '250px'};
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

const Button = styled.button`
  background: none;
  outline: none;
  appearance: none;
  border: none;
  color: #fff;
`;

export default ({ children, video, onOpenMenuClicked, containerHeight, mobileContainerHeight }) => (
  <Container containerHeight={containerHeight} mobileContainerHeight={mobileContainerHeight}>
    <Video autoPlay loop muted preload="true">
      <source src={video} type="video/mp4" />
    </Video>
    <CommonContainer justifyContent="space-between" alignItems="center">
      <Logo />

      <Media query="(max-width: 1050px)">
        {matches =>
          matches ? (
            <Button onClick={() => onOpenMenuClicked(true)}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </Button>
          ) : (
            <Fragment>
              <Navigation />
              <div style={{ width: '231px' }} />
            </Fragment>
          )
        }
      </Media>
    </CommonContainer>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
  </Container>
);