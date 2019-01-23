import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router'
import styled from 'styled-components';
import Sidebar from 'react-sidebar';
import withAnalytics from 'next-analytics';
import GlobalStyles from '../globalStyles';
import { getPageData } from '../services/prismic';
import { getLiveInfo } from '../services/churchOnline';
import CopyrightFooter from '../blocks/CopyrightFooter';
import SocialIcons from '../components/SocialIcons';
import LiveBanner from '../components/LiveBanner';
import Navigation from '../blocks/Navigation';
import MenuContent from '../components/MenuContent';
import AppAd from '../blocks/AppAd';
import {
  CHURCH_NAME,
  SITE_URL,
  META_DESCRIPTION,
  META_KEYWORDS,
  OG_IMAGE,
  GA_ID,
  FB_PIXEL_ID
} from '../constants';

const NavContainer = styled.div`
  background-color: #f7f7f7;
  padding: 16px 8px;
  
  a {
    padding: 16px;
  }
`;

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };
    this.onOpenMenuClicked = this.onOpenMenuClicked.bind(this);
    this.onCloseMenuClicked = this.onCloseMenuClicked.bind(this);
    this.handleRouteChange = this.handleRouteChange.bind(this);
    this.handleRouteChangeEnd = this.handleRouteChangeEnd.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const commonData = await Promise.all([
      getPageData('common'),
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

  handleRouteChange() {
    this.setState({ isMenuOpen: false });
  }

  handleRouteChangeEnd() {
    document.getElementById('sidebar-scroll-container').scrollTop = 0;
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.handleRouteChange);
    Router.events.on('routeChangeComplete', this.handleRouteChangeEnd);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.handleRouteChange);
    Router.events.off('routeChangeComplete', this.handleRouteChangeEnd);
  }

  onSetOpen(open) {
    this.setMenuOpen(open);
  }

  onOpenMenuClicked() {
    this.setMenuOpen(true);
  }

  onCloseMenuClicked() {
    this.setMenuOpen(false);
  }

  setMenuOpen(value) {
    this.setState({ isMenuOpen: value });
  }

  render () {
    const { Component } = this.props;

    return (
      <Container>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content={CHURCH_NAME} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:site_name" content={CHURCH_NAME} />
          <meta property="og:description" content={META_DESCRIPTION} />
          {/* <meta property="og:image" content={this.props.commonData.data.open_graph_image.url} /> */}
          <meta property="og:image:secure_url" content={this.props.commonData.data.open_graph_image.url} />
          <meta name="description" content={META_DESCRIPTION} />
          <meta name="keywords" content={META_KEYWORDS} />
          <link rel="shortcut icon" type="image/png" href={this.props.commonData.data.favicon.url} />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700" rel="stylesheet"></link>
        </Head>
        <GlobalStyles />

        <Sidebar
          sidebar={<MenuContent onCloseMenuClicked={this.onCloseMenuClicked} />}
          open={this.state.isMenuOpen}
          onSetOpen={this.onSetOpen}
          contentId="sidebar-scroll-container"
          pullRight={true}
          styles={{
            sidebar: { background: '#fff', zIndex: 3 },
            overlay: { zIndex: 2 },
            dragHandle: { zIndex: 2 }
          }}
        >
          <div>
            <LiveBanner
              isLive={this.props.commonData.isLive}
              serviceDate={this.props.commonData.eventStartTime}
              countdownText={this.props.commonData.data.live_banner_countdown_text}
              liveText={this.props.commonData.data.live_banner_watch_now_text}/>
            <Component {...this.props} onOpenMenuClicked={this.onOpenMenuClicked} />
            <AppAd document={this.props.commonData} />
            <NavContainer>
              <Navigation flexWrap="wrap" />
            </NavContainer>
            <SocialIcons />
            <CopyrightFooter document={this.props.commonData} />
          </div>
        </Sidebar>
      </Container>
    );
  }
};

export default withAnalytics(Router, { ga: GA_ID, fbq: FB_PIXEL_ID })(MyApp);