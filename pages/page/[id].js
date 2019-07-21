import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import Error from 'next/error';

import { getPageDataById } from '../../services/prismic';
import PageTitle from '../../components/PageTitle';
import VideoBanner from '../../components/VideoBanner';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;

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
  static async getInitialProps({ query }) {
    return getPageDataById(query.id)
      .then(document => {
        return {
          document,
          errorCode: document ? null : 404
        }
      });
  }

  render() {
    if (this.props.pageProps.errorCode) {
      return <Error statusCode={this.props.pageProps.errorCode} />;
    }

    return (
      <div>
        <Head>
          <title>{RichText.asText(this.props.pageProps.document.data.title)} | Dreamer's Church</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>{RichText.asText(this.props.pageProps.document.data.title)}</PageTitle>
          </Flex>
        </VideoBanner>
        <Container className="prismic-content">
            {RichText.render(this.props.pageProps.document.data.content)}
        </Container>
      </div>
    )
  }
}