import { Box, Image } from '@chakra-ui/react';

const FishImageGallery = ({ images }) => {
  return (
    <Box display='flex' height='15rem'>
      {images.map((image) => (
        <Image src={image.src} key={image.src} width='25%' alignSelf='stretch' />
      ))}
    </Box>
  );
};

export default FishImageGallery;
