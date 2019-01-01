import styled from 'styled-components';
import Link from 'next/link';
import { NAVIGATION } from '../../constants';

const Container = styled.div`
  a {
    color: #fff;
    padding: 16px 32px;
    display: block;
  }
`;

export default () => (
  <Container>
    {NAVIGATION.map(({ text, url }, index) => (
      <Link href={url} key={index}>
        <a>{text}</a>
      </Link>
    ))}
  </Container>
);