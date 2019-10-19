import { Flex } from 'reflexbox';
import NextLink from 'next/link';
import styled from 'styled-components';
import Link from '../../components/Link';
import { PAGES, HORIZONTAL_NAVIGATION } from '../../constants';

const navigationPages = HORIZONTAL_NAVIGATION.map(item => PAGES.find(page => page.id === item));

const Anchor = styled(Link)`
  &:not(:last-child) {
    margin-right: 32px;
  }
`;

export default ({ flexWrap }) => (
  <Flex alignItems="center" justifyContent="center" flexWrap={flexWrap || 'initial'}>
    {navigationPages.map(({ text, href, fullUrl, id, external }) => (
      external ? <Anchor href={fullUrl} target="_blank" key={id}>{text}</Anchor> :
      <NextLink href={href || fullUrl} as={fullUrl} key={id}>
        <Anchor>{text}</Anchor>
      </NextLink>
    ))}
  </Flex>
);