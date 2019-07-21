import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';

import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';
import VideoBanner from '../../components/VideoBanner';
import { getVideos } from '../../services/youtube';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 16px;
`;

const SermonTitle = styled(PageTitle)`
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const MOBILE_PLAYER_HEIGHT = '250';
const DESKTOP_PLAYER_HEIGHT = '360';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlayerHeight: DESKTOP_PLAYER_HEIGHT
    };
  }

  static async getInitialProps({ query }) {
    return getVideos()
      .then((videos) => {
        return {
          video: videos.find(video => video.snippet.resourceId.videoId === query.id)
        };
      });
  }

  componentDidMount() {
    this.setState({
      videoPlayerHeight: window.innerWidth > 600 ? DESKTOP_PLAYER_HEIGHT : MOBILE_PLAYER_HEIGHT
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.pageProps.video.snippet.title} | Dreamer's Church, Austin, TX</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <SermonTitle>{this.props.pageProps.video.snippet.title}</SermonTitle>
          </Flex>
        </VideoBanner>
        <Container>
          <iframe
            type="text/html"
            width="100%"
            height={this.state.videoPlayerHeight}
            src={`https://www.youtube.com/embed/${this.props.pageProps.video.snippet.resourceId.videoId}?autoplay=1`}
            frameBorder="0">
          </iframe>
          <p>{this.props.pageProps.video.snippet.description}</p>
          <div style={{'textAlign': 'center'}}>
            <Link href="/sermons">
              <Button theme="dark" onClick={this.onLoadMoreClicked}>View all sermons</Button>
            </Link>
          </div>
        </Container>
      </div>
    )
  }
}