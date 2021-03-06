import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Flex, Box } from 'reflexbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpotify,
  faGooglePlay,
  faApple,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import appleMusicIcon from '../components/Apple_Music_Icon_blk.svg';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import Button from '../components/Button';

const Section = styled.div`
  margin: 60px 0;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
`;

const Header = styled.h3`
  font-weight: 500;
  margin: 0 0 16px 0;
  font-size: 28px;
`; 


const PlatformLink = ({ url, children, alt, title }) => (
  <Box mr={5}>
    <a href={url} target="_blank" alt={alt} title={title}>
      {children}
    </a>
  </Box>
);

export default ({ commonData, onOpenMenuClicked }) => {
  return (
    <>
      <Head>
        <title>Worship | Dreamer's Church, Austin, TX</title>
      </Head>
      <VideoBanner
        video={commonData.data.banner_video.url}
        onOpenMenuClicked={onOpenMenuClicked}>
        <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
          <PageTitle>Worship</PageTitle>
        </Flex>
      </VideoBanner>
      <Container>
        <Flex flexDirection={['column', 'row']}>
          <Box mr={[0, 3]} mb={[3, 0]} width={['100%', '50%']}>
            <iframe
              type="text/html"
              width="100%"
              height="250px"
              src="https://www.youtube.com/embed/3_Bs-cYN_nY"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </Box>
          <Box width={['100%', '50%']}>
            <iframe
              type="text/html"
              width="100%"
              height="250px"
              src="https://www.youtube.com/embed/89H6OpebwRs"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </Box>
        </Flex>

        <Section>
          <Header>Listen on all digital platforms</Header>
          <Flex alignItems="center" mt={3} mb={4}>
            <PlatformLink
              url="https://music.apple.com/album/1482384745?app=itunes&fbclid=IwAR0jIPcH2vM-h0tr1ZxDc9dPt_t30B1TsiiZwEm448gAW8wefyvo8O8ZVTE&ls=1"
              alt="Listen on Apple Music"
              title="Listen on Apple Music">
              <img height="48px" src={appleMusicIcon} />
            </PlatformLink>
            <PlatformLink
              url="http://itunes.apple.com/album/id1482384745?ls=1&app=itunes"
              alt="Listen on iTunes"
              title="Listen on iTunes">
              <FontAwesomeIcon size="3x" icon={faApple} />
            </PlatformLink>
            <PlatformLink
              url="https://play.google.com/store/music/album/Dreamer_s_Church_Miracles_Happen?id=Bk7rf4dr2mpeouruw6ym2dy3yle"
              alt="Listen on Google Play Music"
              title="Listen on Google Play Music">
              <FontAwesomeIcon size="3x" icon={faGooglePlay} />
            </PlatformLink>
            <PlatformLink
              url="https://open.spotify.com/track/1UaKlqZioQLIZreitzzIoL?si=AKAYHOqYQDem5RtNe6FYPQ"
              alt="Listen on Spotify"
              title="Listen on Spotify">
              <FontAwesomeIcon size="3x" icon={faSpotify} />
            </PlatformLink>
            <PlatformLink
              url="https://www.youtube.com/c/dreamerschurch"
              alt="Listen on Youtube"
              title="Listen on Youtube">
              <FontAwesomeIcon size="3x" icon={faYoutube} />
            </PlatformLink>
          </Flex>
        </Section>
        
        <Section>
          <Header>Church Resources</Header>
          <Flex flexDirection="column">
            <Box my={2}>
              <a href="https://drive.google.com/open?id=1ecLZ6DL-H1M8NTAZgHJMebHfA8B8uMu5" target="_blank">
                <Button theme="dark">
                  <FontAwesomeIcon icon={faCloudDownloadAlt} style={{ marginRight: '16px' }} />
                  Chord Chart
                </Button>
              </a>
            </Box>
            <Box my={2}>
              <a href="https://drive.google.com/open?id=1A6NAGL19p-crt5m_3l2wcrrrHHp4Xud-" target="_blank">
                <Button theme="dark">
                  <FontAwesomeIcon icon={faCloudDownloadAlt} style={{ marginRight: '16px' }} />
                  Pro-Presenter Files
                </Button>
              </a>
            </Box>
            <Box my={2}>
              <a href="https://drive.google.com/open?id=1ZxhhhFI0j6alVyoj8PQh8YO7UpmlIY6c" target="_blank">
                <Button theme="dark">
                  <FontAwesomeIcon icon={faCloudDownloadAlt} style={{ marginRight: '16px' }} />
                  Ableton Tracks
                </Button>
              </a>
            </Box>
            <Box my={2}>
              <a href="https://drive.google.com/open?id=19yct3PMSAa7K7JMk842lOK1S0q8B_NZ6" target="_blank">
                <Button theme="dark">
                  <FontAwesomeIcon icon={faCloudDownloadAlt} style={{ marginRight: '16px' }} />
                  Individual Tracks
                </Button>
              </a>
            </Box>
          </Flex>
        </Section>

        <Section>
          <Header>Other Videos</Header>
          <Flex flexDirection={['column', 'row']}>
            <Box mr={[0, 3]} mb={[3, 0]} width={['100%', '50%']}>
              <iframe
                type="text/html"
                width="100%"
                height="250px"
                src="https://www.youtube.com/embed/2kt6oouym38"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </Box>
            <Box width={['100%', '50%']}>
              <iframe
                type="text/html"
                width="100%"
                height="250px"
                src="https://www.youtube.com/embed/272OcccA2dU"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </Box>
          </Flex>
        </Section>
      </Container>
    </>
  )
}
