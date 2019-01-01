import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.img`
  position: absolute;
  top: 16px;
  left: 16px;
  margin: 0;
  cursor: pointer;
  height: 50px;

  @media (max-width: 640px) {
    height: 40px;
  }
`;

export default () => (
  <Link href="/">
    <Logo src="/static/logo.svg" />
  </Link>
);