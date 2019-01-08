import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import YoutubePlaylist from '../components/YoutubePlaylist';

const YOUTUBE_CHANNEL_ID = 'UUAN8hiFKUYfvBWONFKzRHCw';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Dreamer's Church - Sermons</title>
        </Head>
        <VideoBanner
          video="https://prismic-io.s3.amazonaws.com/dreamers%2F1fede394-ee7e-4c86-b37c-aab2e9168a2e_header-achurchforthejourney.mp4"
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>Sermons</PageTitle>
          </Flex>
        </VideoBanner>
        <YoutubePlaylist playlistId={YOUTUBE_CHANNEL_ID} />
      </div>
    )
  }
}