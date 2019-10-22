import styled from 'styled-components';
import { Flex } from 'reflexbox';
import NextLink from 'next/link';
import Button from './Button';

export const BannerContainer = styled(Flex)`
  width: 100%;
  height: 50px;
  background-color: #333;
  color: #fff;
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const BannerButton = styled(Button)`
  padding: 6px 8px;
  font-size: 10px;
  margin-left: 16px;
`;

export const Banner = ({ actionText, actionLink, text }) => (
  <BannerContainer alignItems="center" justifyContent="center">
    <span>{text}</span>
    <NextLink href={actionLink}>
      <BannerButton>{actionText}</BannerButton>
    </NextLink>
  </BannerContainer>
);
