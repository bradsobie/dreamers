import styled from 'styled-components';

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

export default (props) => (
  <Container>
    <Video autoPlay loop muted preload="true">
      <source src="https://elevationchurch.org/wp-content/uploads/2018/12/121618_TheExchangeZone_EC.org_.mp4" type="video/mp4" />
    </Video>
    <ChildrenContainer>
      {props.children}
    </ChildrenContainer>
  </Container>
);