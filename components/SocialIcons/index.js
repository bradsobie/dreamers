import { Flex } from '@rebass/grid';
import styled from  'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  background-color: #ddd;
`;

export default () => (
  <Container>
    <Flex justifyContent="center" p={3}>
      <a href="https://www.facebook.com/dreamerschurchatx/">
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
      </a>
      <a href="https://www.instagram.com/dreamerschurchatx/">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </Flex>
  </Container>
);