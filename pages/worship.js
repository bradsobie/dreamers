import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Flex, Box } from 'reflexbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpotify,
  faGooglePlay,
  faApple
} from '@fortawesome/free-brands-svg-icons';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import useMedia from 'use-media';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
`;

const PlatformLink = ({ url, icon }) => (
  <Box mx={4}>
    <a href={url} target="_blank">
      <FontAwesomeIcon size="3x" icon={icon} />
    </a>
  </Box>
);

const ListenText = styled.h3`
  font-weight: bold;
  margin: 0;
`;

const MOBILE_PLAYER_HEIGHT = '250';
const DESKTOP_PLAYER_HEIGHT = '550';

export default ({ commonData, onOpenMenuClicked }) => {
  const isWide = useMedia({ minWidth: 800 });
  const playerHeight = isWide ? DESKTOP_PLAYER_HEIGHT : MOBILE_PLAYER_HEIGHT;

  return (
    <>
      <Head>
        <title>Worship | Dreamer's Church, Austin, TX</title>
        <meta name="robots" content="noindex" />
      </Head>
      <VideoBanner
        video={commonData.data.banner_video.url}
        onOpenMenuClicked={onOpenMenuClicked}>
        <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
          <PageTitle>Worship</PageTitle>
        </Flex>
      </VideoBanner>
      <Container>
        <iframe
          type="text/html"
          width="100%"
          height={playerHeight}
          src="https://www.youtube.com/embed/272OcccA2dU"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>

        <Flex justifyContent="center" mt={4} mb={3}>
          <ListenText>Listen on all digital platforms</ListenText>
        </Flex>

        <Flex justifyContent="center" alignItems="center" mt={3} mb={4}>
          <PlatformLink
            url="https://music.apple.com/album/1482384745?app=itunes&fbclid=IwAR0jIPcH2vM-h0tr1ZxDc9dPt_t30B1TsiiZwEm448gAW8wefyvo8O8ZVTE&ls=1"
            icon={faApple}
          />
          <PlatformLink
            url="https://play.google.com/store/music/album/Dreamer_s_Church_Miracles_Happen?id=Bk7rf4dr2mpeouruw6ym2dy3yle"
            icon={faGooglePlay}
          />
          <PlatformLink
            url="https://music.apple.com/album/1482384745?app=itunes&fbclid=IwAR0jIPcH2vM-h0tr1ZxDc9dPt_t30B1TsiiZwEm448gAW8wefyvo8O8ZVTE&ls=1"
            icon={faSpotify}
          />
        </Flex>
      </Container>
    </>
  )
}
