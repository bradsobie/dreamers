import React from 'react';
import Head from 'next/head';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import Button from '../components/Button';
import PrismicContent from '../components/PrismicContent';
import ContentContainer from '../components/ContentContainer';
import { getPageData } from '../services/prismic';

const GiveTitle = styled(PageTitle)`
  font-size: 24px;

  @media (max-width: 960px) {
    margin-top: 32px;
  }
`;

export default class extends React.Component {
  static async getInitialProps() {
    const document = await getPageData('giving');
    return { document };
  }

  render() {
    return (
      <>
        <Head>
          <title>Giving | Dreamer's Church, Austin, TX</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" flexDirection="column" css={{ height: '100%' }}>
            <GiveTitle>{RichText.asText(this.props.pageProps.document.data.banner_title)}</GiveTitle>
            <Button href="https://app.customgiving.com/give/dreamerschurch" target="_blank">
              Give now
            </Button>
          </Flex>
        </VideoBanner>
        <ContentContainer>
          <PrismicContent content={this.props.pageProps.document.data.content} />
        </ContentContainer>
      </>
    )
  }
}