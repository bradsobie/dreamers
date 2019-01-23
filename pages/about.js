import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import { getPageData } from '../services/prismic';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;

  h3 {
    font-weight: 400;
    font-size: 28px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
  }

  li {
    margin: 16px 0;
    padding-left: 8px;
  }
`;

export default class extends React.Component {
  static async getInitialProps() {
    return getPageData('about')
      .then(document => ({ document }));
  }

  render() {
    return (
      <div>
        <Head>
          <title>About - Dreamer's Church</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>About</PageTitle>
          </Flex>
        </VideoBanner>
        <Container>
          {RichText.render(this.props.pageProps.document.data.content)}
        </Container>
      </div>
    )
  }
}