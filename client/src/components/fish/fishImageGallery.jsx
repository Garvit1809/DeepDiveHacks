import { Box, Image } from '@chakra-ui/react';

const FishImageGallery = ({ images }) => {
  const gridWidth = images.length > 4 ? 4 : images.length;

  return (
    <Box display='flex' height='15rem'>
      {images.map((image) => (
        <Image src={image.src} key={image.src} width='25%' alignSelf='stretch' objectFit='cover' />
      ))}
    </Box>
  );
};

export default FishImageGallery;
