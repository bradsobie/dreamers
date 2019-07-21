import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

const Container = styled.div.attrs({
  className: 'prismic-content'
})`
  h3 {
    font-weight: 400;
    font-size: 28px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
  }

  li {
    margin: 16px 0;
    padding-left: 8px;
  }

  img {
    max-width: 100%;
  }
`;

export default ({ content }) => (
  <Container>
    {RichText.render(content)}
  </Container>
);
