import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 16px;
`;

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Next Steps | Dreamer's Church</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>Next Steps</PageTitle>
          </Flex>
        </VideoBanner>

        <Container>
          <p>Next Steps is a series of 4 classes designed to introduce you to the leaders, give you some insight on our structure and ministry philosophy, help you implement tools that will strengthen your relationship with God, and take you on a journey of discovering how you have been uniquely created to minister and serve others.</p>
          <p>The first class in our Next Steps Track takes place every Sunday right after our service. The class starts 10 minutes after church and goes for 30 minutes, and childcare is provided.</p>
        </Container>
      </div>
    )
  }
}