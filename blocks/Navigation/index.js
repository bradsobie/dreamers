import { Flex } from '@rebass/grid';
import NextLink from 'next/link';
import styled from 'styled-components';
import Link from '../../components/Link';

const Anchor = styled(Link)`
  &:not(:last-child) {
    margin-right: 32px;
  }
`;

export default () => (
  <Flex alignItems="center" justifyContent="center">
    <NextLink href="/about">
      <Anchor>About</Anchor>
    </NextLink>
    <NextLink href="/sermons">
      <Anchor>Sermons</Anchor>
    </NextLink>
  </Flex>
);