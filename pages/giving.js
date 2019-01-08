import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import Button from '../components/Button';

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
  render() {
    return (
      <div>
        <Head>
          <title>Dreamer's Church - Giving</title>
        </Head>
        <VideoBanner
          video="https://prismic-io.s3.amazonaws.com/dreamers%2F1fede394-ee7e-4c86-b37c-aab2e9168a2e_header-achurchforthejourney.mp4"
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" flexDirection="column" css={{ height: '100%' }}>
            <GiveTitle>Making an Impact. Leaving a Legacy.</GiveTitle>
            <Button href="https://app.customgiving.com/give/dreamerschurch" target="_blank">Give now</Button>
          </Flex>
        </VideoBanner>

        <Container>
            <p>
              Want to join us in our mission of helping people take the next step in their journey? Your generosity enables us to help more and more people encounter God, find community, discover their purpose and be empowered to fulfill their God-given dreams. We are truly grateful for your donation and hope the convenience and simplicity of online giving will be helpful to you.
            </p>
            <p>
              Financial giving can be divided into two categories: tithes and offerings. The Bible teaches us that we worship the Lord with our tithe, which is ten percent of our income contributed to the church on a regular basis. When we feel called to give over and above our tithe, we do so as an offering.
            </p>
          <Button theme="dark" href="https://app.customgiving.com/give/dreamerschurch" target="_blank">Give now</Button>
        </Container>
      </div>
    )
  }
}