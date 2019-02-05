import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import { getPageData } from '../services/prismic';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 16px;
`;

export default class extends React.Component {
  static async getInitialProps() {
    return getPageData('app')
      .then(document => ({ document }));
  }

  render() {
    return (
      <div>
        <Head>
          <title>App | Dreamer's Church</title>
          <meta name="robots" content="noindex"></meta>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>{RichText.asText(this.props.pageProps.document.data.banner_title)}</PageTitle>
          </Flex>
        </VideoBanner>

        <Container className="prismic-content">
          {RichText.render(this.props.pageProps.document.data.content)}
        </Container>
      </div>
    )
  }
}