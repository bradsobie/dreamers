import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import Countdown from 'react-countdown-now';
import { WATCH_NOW_LINK } from '../../constants';

import Button from '../Button';

const WatchNowButton = styled(Button)`
  padding: 6px 8px;
  font-size: 10px;
  margin-left: 16px;
`;

const Banner = styled(Flex)`
  width: 100%;
  height: 50px;
  background-color: #333;
  color: #fff;
  font-weight: 500;
`;

const renderer = ({ days, hours, minutes, completed }) => {
  if (completed) return (
    <Flex alignItems="center">
      <span>We're live!</span>
      <WatchNowButton href={WATCH_NOW_LINK} target="_blank">Watch now</WatchNowButton>
    </Flex>
  );
  return `Next service in ${days}d ${hours}h ${minutes}m`;
};

export default ({ isLive, serviceDate }) => (
  <Banner justifyContent="center" alignItems="center">
    <Countdown date={serviceDate} renderer={renderer} />
  </Banner>
);