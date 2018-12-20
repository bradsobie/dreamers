import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';

import AppAd from '../blocks/AppAd';

import Button from '../components/Button';
import Logo from '../components/Logo';
import VideoBanner from '../components/VideoBanner';
import CommonHead from '../components/CommonHead';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Dreamer's Church</title>
          <CommonHead />
        </Head>
        <VideoBanner>
          <Logo />
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <Button>Watch Now</Button>
          </Flex>
        </VideoBanner>
        <AppAd document={this.props.commonData} />
      </div>
    )
  }
}