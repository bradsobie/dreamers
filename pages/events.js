import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Flex, Box } from '@rebass/grid';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import Truncate from 'react-truncate';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';
import Button from '../components/Button';
import ContentContainer from '../components/ContentContainer';
import { getEvents } from '../services/prismic';

const EventContainer = styled(Box).attrs({
  p: 4
})`
  border: 1px solid #ddd;
`;

const EventItem = ({ event }) => (
  <EventContainer m={3} width={[ 1, 'calc(50% - 32px)' ]}>
    <h2 style={{ marginTop: 0 }}>{RichText.asText(event.data.title)}</h2>
    <p>
      <Truncate lines={3}>{RichText.asText(event.data.content)}</Truncate>
    </p>
    <Link href="/event/[id]" as={`/event/${event.uid}`}>
      <Button theme="dark">Learn more</Button>
    </Link>
  </EventContainer>
);

export default class extends React.Component {
  static async getInitialProps() {
    const events = await getEvents();
    return { events };
  }

  render() {
    return (
      <>
        <Head>
          <title>Events | Dreamer's Church, Austin, TX</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>Events</PageTitle>
          </Flex>
        </VideoBanner>
        <ContentContainer>
          <Flex flexWrap="wrap" mb={4} m={'-16px'}>
            {this.props.pageProps.events &&
              this.props.pageProps.events.map(event => <EventItem key={event.uid} event={event} />)
            }
          </Flex>
        </ContentContainer>
      </>
    )
  }
}