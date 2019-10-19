import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Flex } from 'reflexbox';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Head>
          <title>Worship | Dreamer's Church, Austin, TX</title>
          <meta name="robots" content="noindex" />
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>Worship</PageTitle>
          </Flex>
        </VideoBanner>
        <Container>
          <iframe
            type="text/html"
            width="100%"
            height="550px"
            src="https://www.youtube.com/embed/272OcccA2dU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </Container>
      </>
    )
  }
}
