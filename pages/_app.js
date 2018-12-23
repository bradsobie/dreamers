import App, { Container } from 'next/app';
import GlobalStyles from '../globalStyles';
import { getCommonData } from '../services/prismic';
import CopyrightFooter from '../blocks/CopyrightFooter';
import SocialIcons from '../components/SocialIcons';
import LiveBanner from '../components/LiveBanner';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const commonData = await getCommonData();

    return { pageProps, commonData };
  }

  render () {
    const { Component } = this.props;

    return (
      <Container>
        <GlobalStyles />
        <LiveBanner />
        <Component {...this.props} />
        <SocialIcons />
        <CopyrightFooter document={this.props.commonData} />
      </Container>
    );
  }
};