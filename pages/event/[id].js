import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import Error from 'next/error';

import { getPageDataById } from '../../services/prismic';
import PageTitle from '../../components/PageTitle';
import VideoBanner from '../../components/VideoBanner';
import PrismicContent from '../../components/PrismicContent';
import ContentContainer from '../../components/ContentContainer';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const document = await getPageDataById(query.id);
    return {
      document,
      errorCode: document ? null : 404
    };
  }

  render() {
    if (this.props.pageProps.errorCode) {
      return <Error statusCode={this.props.pageProps.errorCode} />;
    }

    return (
      <>
        <Head>
          <title>{RichText.asText(this.props.pageProps.document.data.title)} | Dreamer's Church, Austin, TX</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>{RichText.asText(this.props.pageProps.document.data.title)}</PageTitle>
          </Flex>
        </VideoBanner>
        <ContentContainer>
          <PrismicContent content={this.props.pageProps.document.data.content} />
        </ContentContainer>
      </>
    )
  }
}