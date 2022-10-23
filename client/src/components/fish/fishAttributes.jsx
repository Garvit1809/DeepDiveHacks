import { Box } from '@chakra-ui/react';

const FishAttributes = ({ fishData }) => {
  console.log(fishData);

  return (
    <>
      <Box mt='5' display='flex' gap='3' flexDirection='column'>
        {fishData.color ? (
          <Box bg='#fff' borderRadius='5px' p='2' w='max-content'>
            <b>Color:</b> {fishData.color[0]}
          </Box>
        ) : (
          ''
        )}

        {fishData.availability ? (
          <Box bg='#fff' borderRadius='5px' p='2' w='max-content'>
            <b>Availability:</b> {fishData.availability}
          </Box>
        ) : (
          ''
        )}
      </Box>
    </>
  );
};

export default FishAttributes;
