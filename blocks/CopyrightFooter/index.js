import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

const Container = styled(Flex)`
  background-color: #333;
  color: #fff;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.54)
`;

export default ({ document }) => (
  <Container justifyContent="center" alignItems="center" flexDirection="column" p={3}>
    <div><a href="https://goo.gl/maps/41AKmdJVAd12" target="_blank">3901 Speedway, Austin, TX 78751</a> | <a href="tel:(512) 123-1234">(512) 123-1234</a></div>
    <Copyright>
      {RichText.asText(document.data.copyright)}
    </Copyright>
  </Container>
);