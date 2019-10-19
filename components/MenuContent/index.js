import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Flex } from 'reflexbox';
import { PAGES, VERTICAL_NAVIGATION } from '../../constants';

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

const navigationPages = VERTICAL_NAVIGATION.map(item => PAGES.find(page => page.id === item));

export default ({ onCloseMenuClicked }) => (
  <Container>
    <Flex justifyContent="flex-end">
      <CloseButton onClick={onCloseMenuClicked}>
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </CloseButton>
    </Flex>

    <LinkContainer>
      {navigationPages.map(({ text, fullUrl, href }, index) => (
        <Link href={href || fullUrl} as={fullUrl} key={index}>
          <a>{text}</a>
        </Link>
      ))}
    </LinkContainer>
  </Container>
);