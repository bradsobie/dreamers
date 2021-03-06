import React from 'react';
import Head from 'next/head';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import ContentContainer from '../components/ContentContainer';
import { getPageData, linkResolver } from '../services/prismic';

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
    const document = await getPageData('visit');
    return { document };
  }

  render() {
    return (
      <>
        <Head>
          <title>Visit Us | Dreamer's Church, Austin, TX</title>
          <script async src='https://tag.simpli.fi/sifitag/d79949f0-f58e-0135-cabe-06a9ed4ca31b'></script>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>Visit Us</PageTitle>
          </Flex>
        </VideoBanner>

        <ContentContainer>
          <Section>
            {RichText.render(this.props.pageProps.document.data.time)}
            <GoogleMap
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.29309926762!2d-97.71424188487786!3d30.342618981774876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644c9af78eb1abb%3A0x2e589dab1c4c17ec!2sDreamer&#39;s+Church!5e0!3m2!1sen!2sus!4v1562128499851!5m2!1sen!2sus"
              frameBorder="0"
              allowFullScreen></GoogleMap>
          </Section>
          <Section>
            {RichText.render(this.props.pageProps.document.data.what_to_expect, linkResolver)}
          </Section>
        </ContentContainer>
      </>
    )
  }
}