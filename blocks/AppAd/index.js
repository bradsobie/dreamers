import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { RichText } from 'prismic-reactjs';

import GooglePlayBadge from '../../components/GooglePlayBadge';
import AppStoreBadge from '../../components/AppStoreBadge';

const Container = styled(Flex)`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Headline = styled.h2`
  font-weight: 400;
  font-size: 30px;
`;

const Paragraph = styled.p`
  color: rgba(0, 0, 0, 0.54);
  line-height: 1.6;
`;

const AppImage = styled.img`
  height: 350px;

  @media (min-width: 640px) {
    margin-right: 60px;
  }
`;

export default ({ document }) => (
  <Container flexDirection={['column', 'row']} alignItems="center" justifyContent="center">
    <Box order={[2, 1]}>
      <AppImage src="/static/mobile_app.gif" />
    </Box>
    <Box order={[1, 2]}>
      <Headline>{RichText.asText(document.data.app_headline)}</Headline>
      <Paragraph>{RichText.asText(document.data.app_description)}</Paragraph>
      <div>
        <GooglePlayBadge />
        <AppStoreBadge />
      </div>
    </Box>
  </Container> 
);