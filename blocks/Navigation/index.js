import { Flex } from '@rebass/grid';
import NextLink from 'next/link';
import styled from 'styled-components';
import Link from '../../components/Link';
import { NAVIGATION } from '../../constants';

const Anchor = styled(Link)`
  &:not(:last-child) {
    margin-right: 32px;
  }
`;

export default () => (
  <Flex alignItems="center" justifyContent="center">
    {NAVIGATION.map(({ text, url }) => (
      <NextLink href={url}>
        <Anchor>{text}</Anchor>
      </NextLink>
    ))}
  </Flex>
);