import React from 'react';
import Head from 'next/head';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle';
import VideoBanner from '../components/VideoBanner';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: 0 };
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }
  
  updateWindowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    let iframeHeight;

    if (this.state.windowWidth < 600) {
      iframeHeight = '3200px';
    } else if (this.state.windowWidth >= 600 && this.state.windowWidth <= 960) {
      iframeHeight = '1900px';
    } else if (this.state.windowWidth > 960) {
      iframeHeight = '1500px';
    }

    return (
      <div>
        <Head>
          <title>Small Groups | Dreamer's Church</title>
        </Head>
        <VideoBanner
          video={this.props.commonData.data.banner_video.url}
          onOpenMenuClicked={this.props.onOpenMenuClicked}>
          <Flex justifyContent="center" alignItems="center" css={{ height: '100%' }}>
            <PageTitle>Small Groups</PageTitle>
          </Flex>
        </VideoBanner>

        <iframe
          src="https://dreamerschurch.churchcenter.com/groups/small-groups"
          frameBorder="0"
          width="100%"
          height={iframeHeight}
        />
      </div>
    )
  }
}