import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import Link from 'next/link';

import AppAd from '../blocks/AppAd';

import Button from '../components/Button';
import VideoBanner from '../components/VideoBanner';
import { getHomepageData } from '../services/prismic';
import { getLiveInfo } from '../services/churchOnline';

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
              <Link href="/sermons">
                <Button>Watch Now</Button>
              </Link>
            </Flex>
          </VideoBanner>
        }
        <AppAd document={this.props.commonData} />
      </div>
    )
  }
}