import { Flex } from '@rebass/grid';
import styled from  'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import Link from '../Link';

const Container = styled.div`
  background-color: #ececec;

  a:not(:last-child) {
    margin-right: 64px;
  }
`;

export default () => (
  <Container>
    <Flex justifyContent="center" px={3} py={4}>
      <Link href="https://www.facebook.com/dreamerschurchatx/" target="_blank">
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
      </Link>
      <Link href="https://www.instagram.com/dreamerschurchatx/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </Link>
    </Flex>
  </Container>
);