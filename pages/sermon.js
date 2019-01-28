import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import { getVideos } from '../services/youtube';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 16px;
`;

export default class extends React.Component {
  static async getInitialProps({ query }) {
    console.log('getInitialProps', query);
    return getVideos()
      .then((videos) => {
        console.log(videos);
        return {
          video: videos.find(video => video.snippet.resourceId.videoId === query.id)
        };
      });
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.pageProps.video.snippet.title} | Dreamer's Church</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>{this.props.pageProps.video.snippet.title}</PageTitle>
          </Flex>
        </VideoBanner>
        <Container>
          <iframe
            type="text/html"
            width="100%"
            height="360"
            src={`https://www.youtube.com/embed/${this.props.pageProps.video.snippet.resourceId.videoId}?autoplay=1`}
            frameborder="0">
          </iframe>
          <p>{this.props.pageProps.video.snippet.description}</p>
        </Container>
      </div>
    )
  }
}