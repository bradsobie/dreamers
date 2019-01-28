import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Flex } from '@rebass/grid';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
// import YoutubePlaylist from '../components/YoutubePlaylist';
import { getVideos } from '../services/youtube';

// const YOUTUBE_CHANNEL_ID = 'UUAN8hiFKUYfvBWONFKzRHCw';

export default class extends React.Component {
  static async getInitialProps() {
    return getVideos()
    .then((videos) => {
      console.log(videos);
      return {
        videos
      };
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Head>
          <title>Sermons | Dreamer's Church</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>Sermons</PageTitle>
          </Flex>
        </VideoBanner>
        {/* <YoutubePlaylist playlistId={YOUTUBE_CHANNEL_ID} /> */}

        {this.props.pageProps.videos &&
          this.props.pageProps.videos.map(video =>
            <Link
              key={video.snippet.resourceId.videoId}
              as={`/sermon/${video.snippet.resourceId.videoId}`}
              href={`/sermon?id=${video.snippet.resourceId.videoId}&title=${video.snippet.title}`}>
              <a>{video.snippet.title}</a>
            </Link>
          )
        }
      </div>
    )
  }
}