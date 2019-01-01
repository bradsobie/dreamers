import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import Countdown from 'react-countdown-now';

const Banner = styled(Flex)`
  width: 100%;
  height: 50px;
  background-color: #333;
  color: #fff;
  font-weight: 500;
`;

const renderer = ({ days, hours, minutes, completed }) => {
  if (completed) return 'We\'re live!';
  return `Next service in ${days}d ${hours}h ${minutes}m`;
};

export default ({ isLive, serviceDate }) => (
  <Banner justifyContent="center" alignItems="center">
    <Countdown date={serviceDate} renderer={renderer} />
  </Banner>
);