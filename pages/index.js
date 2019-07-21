import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import Link from 'next/link';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

import Button from '../components/Button';
import VideoBanner from '../components/VideoBanner';
import { getPageData } from '../services/prismic';
import { getVideos } from '../services/youtube';

const ArrowImage = styled.img`
  margin-top: 16px;
`;

const LatestSermon = styled.h4`
  text-transform: uppercase;
  font-size: 10px;
  color: #fff;
  margin: 0;
`;

const SermonTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  margin: 8px 0 16px 0;
  text-align: center;

  @media (max-width: 960px) {
    font-size: 22px;
  }
`;

const BannerContainer = styled(Flex).attrs({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})`
  padding: 0 16px;
  @media (max-width: 960px) {
    margin-top: 32px;
  }
`;

const WatchNowButton = styled(Button)`
  @media (max-width: 960px) {
    font-size: 14px;
    padding: 14px 22px;
  }
`;

export default class extends React.Component {
  static async getInitialProps() {
    return Promise.all([
      getPageData('homepage'),
      getVideos()
    ]).then(([homepageData, videos]) => {
      return {
        document: homepageData,
        latestVideo: videos[0]
      };
    });
  }

  render() {
    const {
      latestVideo,
      document
    } = this.props.pageProps;

    return (
      <>
        <Head>
          <title>Dreamer's Church, Austin, TX | God has created us to dream</title>
        </Head>
        {document &&
          <VideoBanner
            video={this.props.commonData.data.banner_video.url}
            onOpenMenuClicked={this.props.onOpenMenuClicked}
            containerHeight="500px"
            mobileContainerHeight="300px">
            <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
              <BannerContainer>
                <LatestSermon>{RichText.asText(document.data.banner_title)}</LatestSermon>
                <SermonTitle>{latestVideo && latestVideo.snippet.title}</SermonTitle>
                <Link
                  as={`/sermon/${latestVideo.snippet.resourceId.videoId}`}
                  href={`/sermon/[id]?title=${latestVideo.snippet.title}`}>
                  <WatchNowButton>{RichText.asText(document.data.banner_cta_text)}</WatchNowButton>
                </Link>
                <div>
                  <ArrowImage height="12px" src="/static/arrow.svg" />
                </div>
              </BannerContainer>
            </Flex>
          </VideoBanner>
        }
      </>
    )
  }
}