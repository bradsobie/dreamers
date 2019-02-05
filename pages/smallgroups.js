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
export default class extends React.Component {
  static async getInitialProps() {
    return getPageData('smallgroups')
      .then(document => ({ document }));
  }

  render() {
    return (
      <div>
        <Head>
          <title>Small Groups | Dreamer's Church</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>Small Groups</PageTitle>
          </Flex>
        </VideoBanner>

        <Container>
          <p>{RichText.render(this.props.pageProps.document.data.content)}</p>
          <Button
            theme="dark"
            target="_blank"
            href="https://dreamerschurch.churchcenter.com/groups/small-groups">
            {RichText.asText(this.props.pageProps.document.data.button_text)}
          </Button>
        </Container>
      </div>
    )
  }
}