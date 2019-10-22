import { Flex } from 'reflexbox';
import Countdown from 'react-countdown-now';
import { WATCH_NOW_LINK, SERVICE_TIME } from '../../constants';

import { BannerContainer, BannerButton } from '../Banner';


const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) return (
    <Flex alignItems="center">
      <span>We're live!</span>
      <BannerButton href={WATCH_NOW_LINK} target="_blank">Watch now</BannerButton>
    </Flex>
  );

  return (
    <Flex alignItems="center">
      <span>{`Next service is ${days === 0 ? 'today' : 'Sunday'} at ${SERVICE_TIME}. ${days > 0 ? `${days}d` : ''} ${hours > 0 ? `${hours}h` : ''} ${minutes}m ${days === 0 ? `${seconds}s` : ''}`}</span>
      {minutes <= 5 && <BannerButton href={WATCH_NOW_LINK} target="_blank">Watch now</BannerButton>}
    </Flex>
  )
};

export default ({ serviceDate }) => (
  <BannerContainer justifyContent="center" alignItems="center">
    <Countdown date={serviceDate} renderer={renderer} />
  </BannerContainer>
);