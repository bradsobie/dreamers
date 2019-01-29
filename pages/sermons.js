import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Flex, Box } from '@rebass/grid';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import SermonListItem from '../components/SermonListItem';
import { getVideos } from '../services/youtube';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
`;

export default class extends React.Component {
  static async getInitialProps() {
    return getVideos()
    .then((videos) => {
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
        <Container>
          <Flex flexWrap="wrap">
            {this.props.pageProps.videos &&
              this.props.pageProps.videos.map(video =>
                <Box m={3} width={[ 1, 'calc(50% - 32px)' ]} key={video.snippet.resourceId.videoId}>
                  <SermonListItem video={video} />
                </Box>
              )
            }
          </Flex>
        </Container>
      </div>
    )
  }
}