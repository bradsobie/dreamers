import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import Button from '../components/Button';
import { getPageData } from '../services/prismic';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 16px;
`;

const GiveTitle = styled(PageTitle)`
  font-size: 24px;

  @media (max-width: 960px) {
    margin-top: 32px;
  }
`;

export default class extends React.Component {
  static async getInitialProps() {
    return getPageData('giving')
      .then(document => ({ document }));
  }

  render() {
    return (
      <div>
        <Head>
          <title>Dreamer's Church - Giving</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" flexDirection="column" css={{ height: '100%' }}>
            <GiveTitle>{RichText.asText(this.props.pageProps.document.data.banner_title)}</GiveTitle>
            <Button href="https://app.customgiving.com/give/dreamerschurch" target="_blank">
              {RichText.asText(this.props.pageProps.document.data.give_button)}
            </Button>
          </Flex>
        </VideoBanner>

        <Container>
          {RichText.render(this.props.pageProps.document.data.content)}
          <Button theme="dark" href="https://app.customgiving.com/give/dreamerschurch" target="_blank">
            {RichText.asText(this.props.pageProps.document.data.give_button)}
          </Button>
        </Container>
      </div>
    )
  }
}