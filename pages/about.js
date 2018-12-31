import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';

import PageTitle from '../components/PageTitle';
import Logo from '../components/Logo';
import VideoBanner from '../components/VideoBanner';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Dreamer's Church - About</title>
        </Head>
        <VideoBanner video="https://elevationchurch.org/wp-content/uploads/2018/12/120818_Go4Broke_EC.org_.mp4">
          <Logo />
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>About</PageTitle>
          </Flex>
        </VideoBanner>
      </div>
    )
  }
}