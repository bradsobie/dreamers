import styled from 'styled-components';
import Link from 'next/link';
import { Flex, Box } from '@rebass/grid';
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

const Bar = styled(Flex).attrs({
  alignItems: 'center',
  p: [2, 3]
})`
  background-color: #333;
  transition: background-color 0.15s;
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

    ${Bar} {
      background-color: #585858;
    }
  }
`;

const getThumbnailImage = video => video.snippet.thumbnails.maxres ? video.snippet.thumbnails.maxres.url : video.snippet.thumbnails.high.url;

const SermonListItem = ({ video }) => (
  <Link
    as={`/sermon/${video.snippet.resourceId.videoId}`}
    href={`/sermon/[id]?title=${video.snippet.title}`}>
    <Container>
      <div style={{ position: 'relative' }}>
        <img style={{'display': 'block'}} width="100%" src={getThumbnailImage(video)} />
        <Icon icon={faPlayCircle} size="3x" />
      </div>
      <Bar>
        <Box>{video.snippet.title}</Box>
      </Bar>
    </Container>
  </Link>
);

export default SermonListItem;