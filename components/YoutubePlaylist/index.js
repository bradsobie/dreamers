import styled from 'styled-components';

const Iframe = styled.iframe`
  width: 700px;
  height: 400px;
  margin: 16px auto;
  display: block;
  border: none;

  @media (max-width: 700px) {
    width: 100%;
    height: 250px;
    padding: 0 16px;
  }
`;

export default ({ playlistId }) => (
  <Iframe
    src={`https://www.youtube.com/embed/videoseries?listType=playlist&list=${playlistId}`}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen="" />
);