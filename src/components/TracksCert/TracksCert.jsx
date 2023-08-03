import { ImageList, ImageListItem, ImageListItemBar, IconButton, Container } from '@mui/material';

import ModalCert from './ModalCert';
import data from '../../data/data.json';
const datos = data;

const TracksCert = () => {
  return (
    <Container maxWidth="xl">
      <ImageList variant="masonry" cols={3} gap={'2.2rem'}>
        {datos.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              sx={{ backgroundColor: 'rgba(25,27,38,0.6)' }}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <ModalCert item={item}></ModalCert>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};
export default TracksCert;
