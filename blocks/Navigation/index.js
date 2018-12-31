import { Flex } from '@rebass/grid';
import Link from 'next/link';
import styled from 'styled-components';

const Anchor = styled.a`
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 32px;
  }

  &:hover {
    text-decoration: none;
  }
`;

const Container = styled.div`
  background-color: #f7f7f7;
  padding: 32px 8px;
`;

export default () => (
  <Container>
    <Flex alignItems="center" justifyContent="center">
      <Link href="/about">
        <Anchor>About</Anchor>
      </Link>
      <Link href="/sermons">
        <Anchor>Sermons</Anchor>
      </Link>
    </Flex>
  </Container>
);