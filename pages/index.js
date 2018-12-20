import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';

import CopyrightFooter from '../blocks/CopyrightFooter';
import AppAd from '../blocks/AppAd';

import Button from '../components/Button';
import Logo from '../components/Logo';
import VideoBanner from '../components/VideoBanner';
import SocialIcons from '../components/SocialIcons';
import { getCommonData } from '../services/prismic';

export default class extends React.Component {
  static async getInitialProps() {
    return getCommonData().then((document) => ({ document }));
  }

  render() {
    return (
      <div>
        <Head>
          <title>Dreamer's Church</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="robots" content="noindex" />
        </Head>
        <VideoBanner>
          <Logo />
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <Button>Watch Now</Button>
          </Flex>
        </VideoBanner>

        <AppAd document={this.props.document} />

        <SocialIcons />
        <CopyrightFooter document={this.props.document} />
      </div>
    )
  }
}