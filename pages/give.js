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

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Dreamer's Church - Give</title>
        </Head>
        <VideoBanner
          video="https://elevationchurch.org/wp-content/uploads/2018/12/120818_Go4Broke_EC.org_.mp4"
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>Give</PageTitle>
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