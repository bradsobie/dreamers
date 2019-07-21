import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Icon = styled(FontAwesomeIcon)`
  opacity: 0;
  transition: opacity 0.15s;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.a`
  position: relative;
  background-color: #333;
  display: block;
  color: #fff;
  cursor: pointer;

  &:hover {
    ${Icon} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  position: absolute;
  bottom: 8px;
  left: 8px;
`;

const getThumbnailImage = video => video.snippet.thumbnails.maxres ? video.snippet.thumbnails.maxres.url : video.snippet.thumbnails.high.url;

const SermonListItem = ({ video }) => (
  <Link
    as={`/sermon/${video.snippet.resourceId.videoId}`}
    href={`/sermon/[id]?title=${video.snippet.title}`}>
    <Container>
      <img style={{'display': 'block'}} width="100%" src={getThumbnailImage(video)} />
      <Title>{video.snippet.title}</Title>
      <Icon icon={faPlayCircle} size="2x" />
    </Container>
  </Link>
);

export default SermonListItem;