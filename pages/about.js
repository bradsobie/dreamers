import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Section = styled.section`
  margin: 32px 0;

  h3 {
    font-weight: 400;
    font-size: 28px;
    margin-bottom: 16px;
  }
`;

const OrderedList = styled.ol`
  line-height: 1.5;
  padding-left: 16px;

  li {
    margin: 16px 0;
    padding-left: 8px;
    font-size: 20px;

    p {
      font-size: 14px;
    }
  }
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
            <h3>Values</h3>
            <p>We are a Church for the Journey! Our values create guardrails to keep us on mission.</p>

            <OrderedList>
              <li>
                <div>We value people ENCOUNTERING GOD.</div>
                <p>
                  This starts with a relationship with Jesus Christ, but it continues with moments in His presence where we encounter His love and purpose for our life. We can also daily encounter God as we spend time in the Word, this will inspire us to keep dreaming and reaching for all He has for us.
                </p>
              </li>
              <li>
                <div>We value people FINDING COMMUNITY.</div>
                <p>
                  You were created by God to be in community. We have small groups that meet at different times, on different days, and each with their own unique focus. We were designed by God to thrive in community. Our small groups have two common denominators; Creating authentic community and helping people in their discipleship journey. In short, we want to build relationships to know how to best help people take the next step in their journey.
                </p>
              </li>
              <li>
                <div>We value people DISCOVERING THEIR PURPOSE.</div>
                <p>
                  We have a class each Sunday right after church called Next Steps that helps you get started in discovering your purpose.
                </p>
              </li>
              <li>
                <div>We value people BEING EMPOWERED to change their world.</div>
                <p>
                All of us are called to impact the lives around us. The more we learn what God says about us, the more we understand that we are Sons and Daughters of the King, call and empowered to do great things here on earth.
                </p>
              </li>
            </OrderedList>

          </Section>
        </Container>
      </div>
    )
  }
}