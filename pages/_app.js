import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router'
import styled from 'styled-components';
import Sidebar from 'react-sidebar';
import GlobalStyles from '../globalStyles';
import { getCommonData } from '../services/prismic';
import { getLiveInfo } from '../services/churchOnline';
import CopyrightFooter from '../blocks/CopyrightFooter';
import SocialIcons from '../components/SocialIcons';
import LiveBanner from '../components/LiveBanner';
import Navigation from '../blocks/Navigation';
import MenuContent from '../components/MenuContent';

const NavContainer = styled.div`
  background-color: #f7f7f7;
  padding: 16px 8px;
  
  a {
    padding: 16px;
  }
`;

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };
    this.onOpenMenuClicked = this.onOpenMenuClicked.bind(this);
    this.onCloseMenuClicked = this.onCloseMenuClicked.bind(this);
    this.handleRouteChange = this.handleRouteChange.bind(this);
    this.handleRouteChangeEnd = this.handleRouteChangeEnd.bind(this);
  }

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

  handleRouteChange() {
    this.setState({ isMenuOpen: false });
  }

  handleRouteChangeEnd() {
    document.querySelector('.sidebar-scroll-container').scrollTop = 0;
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.handleRouteChange);
    Router.events.on('routeChangeComplete', this.handleRouteChangeEnd);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.handleRouteChange);
    Router.events.off('routeChangeComplete', this.handleRouteChangeEnd);
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
          <meta name="robots" content="noindex" />
          <link rel="shortcut icon" type="image/png" href="/static/favicon.png"/>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700" rel="stylesheet"></link>
        </Head>
        <GlobalStyles />

        <Sidebar
          sidebar={<MenuContent onCloseMenuClicked={this.onCloseMenuClicked} />}
          open={this.state.isMenuOpen}
          onSetOpen={this.onOpenMenuClicked}
          contentClassName="sidebar-scroll-container"
          pullRight={true}
          styles={{
            sidebar: { background: '#fff' }
          }}
        >
          <div>
            <LiveBanner
              isLive={this.props.commonData.isLive}
              serviceDate={this.props.commonData.eventStartTime} />
            <Component {...this.props} onOpenMenuClicked={this.onOpenMenuClicked} />
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