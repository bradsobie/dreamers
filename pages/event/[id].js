import React from 'react';
import Head from 'next/head';
import { Flex, Box } from 'reflexbox';
import Link from 'next/link';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import Error from 'next/error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons';

import { getEventDataById, formatDate } from '../../services/prismic';
import PageTitle from '../../components/PageTitle';
import VideoBanner from '../../components/VideoBanner';
import PrismicContent from '../../components/PrismicContent';
import ContentContainer from '../../components/ContentContainer';
import Button from '../../components/Button';

const InfoContainer = styled(Flex).attrs({
  flexWrap: 'wrap',
  flexDirection: ['column', 'row'],
  py: [3, 4]
})`
  font-size: 18px;
  border-bottom: 1px solid #ddd;
`;

const EventInfo = ({ date, time, location }) => (
  <InfoContainer>
    {date &&
      <Flex alignItems="center" mr={[0, 4]}>
        <FontAwesomeIcon icon={faCalendarAlt} />
        <Box ml={2}>
          {formatDate(date)}
        </Box>
      </Flex>
    }
    {time.length > 0 &&
      <Flex alignItems="center" my={[2, 0]} mr={[0, 4]}>
        <FontAwesomeIcon icon={faClock} />
        <Box ml={2}>
          {RichText.asText(time)}
        </Box>
      </Flex>
    }
    {location.length > 0 &&
      <Flex alignItems="center">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <Box ml={2}>
          {RichText.asText(location)}
        </Box>
      </Flex>
    }
  </InfoContainer>
);

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const document = await getEventDataById(query.id);
    return {
      document,
      errorCode: document ? null : 404
    };
  }

  render() {
    if (this.props.pageProps.errorCode) {
      return <Error statusCode={this.props.pageProps.errorCode} />;
    }

    return (
      <>
        <Head>
          <title>{RichText.asText(this.props.pageProps.document.data.title)} | Dreamer's Church, Austin, TX</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>{RichText.asText(this.props.pageProps.document.data.title)}</PageTitle>
          </Flex>
        </VideoBanner>
        <ContentContainer>
          {this.props.pageProps.document.data.image
            && this.props.pageProps.document.data.image.url
            && <img src={this.props.pageProps.document.data.image.url} style={{ maxWidth: '100%' }} />
          }

          <EventInfo
            date={this.props.pageProps.document.data.date}
            time={this.props.pageProps.document.data.time}
            location={this.props.pageProps.document.data.location}
          />
          
          <PrismicContent content={this.props.pageProps.document.data.content} />

          <Link href="/events">
            <Button theme="dark">
              <Flex alignItems="center">
                <FontAwesomeIcon icon={faChevronLeft} size="1x" />
                <Box ml={3}>View All events</Box>
              </Flex>
            </Button>
          </Link>
        </ContentContainer>
      </>
    )
  }
}