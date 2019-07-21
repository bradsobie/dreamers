import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';

import Button from '../../components/Button';
import GooglePlayBadge from '../../components/GooglePlayBadge';
import AppStoreBadge from '../../components/AppStoreBadge';
import { PAGES } from '../../constants';

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
  margin-top: 0;
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

const GetTheAppButton = styled(Button)`
  @media (max-width: 640px) {
    margin-bottom: 16px;
  }
`;

const appPage = PAGES.find(page => page.id === 'app');

export default ({ document, showBadges }) => (
  <Container flexDirection={['column', 'row']} alignItems="center" justifyContent="center">
    <Box order={[2, 1]}>
      <AppImage src={document.data.app_image.url} />
    </Box>
    <Box order={[1, 2]}>
      <Headline>{RichText.asText(document.data.app_headline)}</Headline>
      <Paragraph>{RichText.asText(document.data.app_description)}</Paragraph>
      {showBadges ? (
        <div>
          <GooglePlayBadge />
          <AppStoreBadge />
        </div>
      ) : (
        <Flex justifyContent={['center', 'start']}>
          <Link href={appPage.href} as={appPage.fullUrl}>
            <GetTheAppButton theme="dark">Get the app</GetTheAppButton>
          </Link>
        </Flex>
      )}
    </Box>
  </Container> 
);