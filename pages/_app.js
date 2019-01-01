import App, { Container } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../globalStyles';
import { getCommonData } from '../services/prismic';
import { getLiveInfo } from '../services/churchOnline';
import CopyrightFooter from '../blocks/CopyrightFooter';
import SocialIcons from '../components/SocialIcons';
import LiveBanner from '../components/LiveBanner';
import Navigation from '../blocks/Navigation';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const commonData = await Promise.all([
      getCommonData(),
      getLiveInfo()
    ]).then(([commonCmsData, churchOnlineInfo]) => {
      return {
        ...commonCmsData,
        ...churchOnlineInfo
      };
    });

    return {
      commonData,
      pageProps
    };
  }

  render () {
    const { Component } = this.props;

    return (
      <Container>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="robots" content="noindex" />
          <link rel="shortcut icon" type="image/png" href="/static/favicon.png"/>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700" rel="stylesheet"></link>
        </Head>
        <GlobalStyles />
        <LiveBanner
          isLive={this.props.commonData.isLive}
          serviceDate={this.props.commonData.eventStartTime} />
        <Component {...this.props} />
        <Navigation />
        <SocialIcons />
        <CopyrightFooter document={this.props.commonData} />
      </Container>
    );
  }
};