import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Flex, Box } from '@rebass/grid';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import SermonListItem from '../components/SermonListItem';
import Button from '../components/Button';
import { getVideos } from '../services/youtube';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onLoadMoreClicked = this.onLoadMoreClicked.bind(this);
    this.state = {
      visibleVideos: [],
      nextVideoIndex: 0
    };
  }

  static async getInitialProps() {
    return getVideos()
    .then((videos) => {
      return {
        videos
      };
    });
  }

  componentDidMount() {
    this.loadMoreVideos();
  }

  onLoadMoreClicked() {
    this.loadMoreVideos();
  }

  loadMoreVideos() {
    this.setState({
      visibleVideos: [
        ...this.state.visibleVideos,
        ...this.props.pageProps.videos.slice(this.state.nextVideoIndex, this.state.nextVideoIndex + 4)
      ],
      nextVideoIndex: this.state.nextVideoIndex + 4
    });
  }

  render() {
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
          <Flex flexWrap="wrap" m={'-16px'} mb={4}>
            {this.state.visibleVideos &&
              this.state.visibleVideos.map(video =>
                <Box m={3} width={[ 1, 'calc(50% - 32px)' ]} key={video.snippet.resourceId.videoId}>
                  <SermonListItem video={video} />
                </Box>
              )
            }
          </Flex>
          <div style={{'textAlign': 'center'}}>
            {this.state.visibleVideos.length < this.props.pageProps.videos.length &&
              <Button theme="dark" onClick={this.onLoadMoreClicked}>Load more</Button>}
          </div>
        </Container>
      </div>
    )
  }
}