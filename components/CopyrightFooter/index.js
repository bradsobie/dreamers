import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import Link from '../../components/Link';
import { CHURCH_ADDRESS, GOOGLE_MAPS_LINK } from '../../constants';

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
  <Container justifyContent="center" alignItems="center" flexDirection="column" p={3} pb={[5, 3]}>
    <Info>
      <Link href={GOOGLE_MAPS_LINK} target="_blank">{CHURCH_ADDRESS}</Link>
      <span> | </span>
      <Link href={`tel:${document.data.phone_number[0].text}`}>{document.data.phone_number[0].text}</Link>
    </Info>
    <Copyright>
      {RichText.asText(document.data.copyright)}
    </Copyright>
  </Container>
);