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

const GoogleMap = styled.iframe`
  border: 0;
  width: 700px;
  height: 400px;

  @media (max-width: 700px) {
    width: 100%;
    height: 300px;
  }
`;

const Section = styled.section`
  margin-bottom: 32px;
`;

export default class extends React.Component {
  static async getInitialProps() {
    return getPageData('visit')
      .then(document => ({ document }));
  }

  render() {
    return (
      <div>
        <Head>
          <title>Dreamer's Church - Visit Us</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>Visit Us</PageTitle>
          </Flex>
        </VideoBanner>

        <Container>
          <Section>
            {RichText.render(this.props.pageProps.document.data.time)}
            <GoogleMap
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.7164380155623!2d-97.7345392848788!3d30.302133181789277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644c9af78eb1abb%3A0x2e589dab1c4c17ec!2sDreamer&#39;s+Church!5e0!3m2!1sen!2sus!4v1546407580454"
              frameborder="0"
              allowfullscreen></GoogleMap>
          </Section>
          
          <Section>
            {RichText.render(this.props.pageProps.document.data.what_to_expect)}
          </Section>
        </Container>
      </div>
    )
  }
}