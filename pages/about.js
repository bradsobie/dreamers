import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Section = styled.section`
  margin: 32px 0;
`;

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Dreamer's Church - About</title>
        </Head>
        <VideoBanner
          video="https://elevationchurch.org/wp-content/uploads/2018/12/120818_Go4Broke_EC.org_.mp4"
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>About</PageTitle>
          </Flex>
        </VideoBanner>

        <Container>
          <Section>
            <p>
            You were created to Dream! GOD loves transforming the lives of broken dreamers into something beautiful beyond recognition. We are most like our Heavenly FATHER when we are dreaming, envisioning the impossible, and creating something out of nothing! 
            </p>
            <p>
            Our amazing God has created each person with a unique purpose and design, and He has created us to dream. We want to help people discover the presence of their loving Father God, and from that encounter be released to dream big dreams over every area of their life. His love changes everything! And His love, released through the dreams He has given us, will change the world!
            </p>
            <p>
            Join us as we come together to love each other, encounter the presence of God, and become everything we were created to be!
            </p>
          </Section>

          <Section>
            <h3>Mission</h3>
            <p>Dreamers Church exist to help people take next steps in their journey.</p>
          </Section>

          <Section>
            <h3>Vision Statement</h3>
            <p>Dream! Dream with God, Dream with others, Dream again!</p>
          </Section>

          <Section>
            <h3>Beliefs</h3>
          </Section>

          <Section>
            <h3>Values</h3>
            <p>We are a Church for the Journey! Our values create guardrails to keep us on mission.</p>
          </Section>
        </Container>
      </div>
    )
  }
}