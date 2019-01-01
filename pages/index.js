import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import Link from 'next/link';
import styled from 'styled-components';

import AppAd from '../blocks/AppAd';

import Button from '../components/Button';
import VideoBanner from '../components/VideoBanner';
import { getHomepageData } from '../services/prismic';
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
`;

const BannerContainer = styled(Flex).attrs({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})`
  @media (max-width: 960px) {
    margin-top: 32px;
  }
`;

export default class extends React.Component {
  static async getInitialProps() {
    return Promise.all([
      getHomepageData(),
      getVideos()
    ]).then(([homepageData, videos]) => {
      return {
        document: homepageData,
        latestVideo: videos[0]
      };
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Dreamer's Church</title>
        </Head>
        {this.props.pageProps.document &&
          <VideoBanner
            video={this.props.pageProps.document.data.banner_video.url}
            onOpenMenuClicked={this.props.onOpenMenuClicked}
            containerHeight="500px"
            mobileContainerHeight="300px">
            <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
              <BannerContainer>
                <LatestSermon>Latest Sermon</LatestSermon>
                <SermonTitle>{this.props.pageProps.latestVideo && this.props.pageProps.latestVideo.snippet.title}</SermonTitle>
                <Link href="/sermons">
                  <Button>Watch Now</Button>
                </Link>
                <div>
                  <ArrowImage height="12px" src="/static/arrow.svg" />
                </div>
              </BannerContainer>
            </Flex>
          </VideoBanner>
        }
        <AppAd document={this.props.commonData} />
      </div>
    )
  }
}