import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Flex } from '@rebass/grid';
import { NAVIGATION } from '../../constants';

const Container = styled.div`
  padding: 16px;

  a {
    padding: 16px 100px 16px 16px;
    display: block;
  }
`;

const LinkContainer = styled.div`
  margin-top: 8px;
`;

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  appearance: none;
`;

export default ({ onCloseMenuClicked }) => (
  <Container>
    <Flex justifyContent="flex-end">
      <CloseButton onClick={onCloseMenuClicked}>
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </CloseButton>
    </Flex>

    <LinkContainer>
      {NAVIGATION.map(({ text, url }, index) => (
        <Link href={url} key={index}>
          <a>{text}</a>
        </Link>
      ))}
    </LinkContainer>
  </Container>
);