import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import Link from 'next/link';
import styled from 'styled-components';

import AppAd from '../blocks/AppAd';

import Button from '../components/Button';
import VideoBanner from '../components/VideoBanner';
import { getHomepageData } from '../services/prismic';
import { getLiveInfo } from '../services/churchOnline';

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
`;

export default class extends React.Component {
  static async getInitialProps() {
    return Promise.all([
      getHomepageData(),
      getLiveInfo()
    ]).then(([homepageData, churchOnlineInfo]) => {
      return {
        document: homepageData,
        churchOnlineInfo
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
              <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <LatestSermon>Latest Sermon</LatestSermon>
                <SermonTitle>The Gift of Community</SermonTitle>
                <Link href="/sermons">
                  <Button>Watch Now</Button>
                </Link>
                <div>
                  <ArrowImage height="12px" src="/static/arrow.svg" />
                </div>
              </Flex>
            </Flex>
          </VideoBanner>
        }
        <AppAd document={this.props.commonData} />
      </div>
    )
  }
}