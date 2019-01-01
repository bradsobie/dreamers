import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';

import AppAd from '../blocks/AppAd';

import Button from '../components/Button';
import Logo from '../components/Logo';
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
        {this.props.pageProps.document && <VideoBanner video={this.props.pageProps.document.data.banner_video.url}>
          <Logo />
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <Button>Watch Now</Button>
          </Flex>
        </VideoBanner>}
        <AppAd document={this.props.commonData} />
      </div>
    )
  }
}