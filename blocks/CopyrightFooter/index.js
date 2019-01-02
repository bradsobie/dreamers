import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import Link from '../../components/Link';

const Container = styled(Flex)`
  background-color: #333;
  color: #fff;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;

  a {
    color: #fff;
  }
`;

const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.54);
`;

const Info = styled.div`
  font-size: 14px;
`;

export default ({ document }) => (
  <Container justifyContent="center" alignItems="center" flexDirection="column" p={3}>
    <Info>
      <Link href="https://goo.gl/maps/U1Jho3buttk" target="_blank">3901 Speedway, Austin, TX 78751</Link>
      <span> | </span>
      <Link href="tel:(512) 123-1234">(512) 123-1234</Link>
    </Info>
    <Copyright>
      {RichText.asText(document.data.copyright)}
    </Copyright>
  </Container>
);