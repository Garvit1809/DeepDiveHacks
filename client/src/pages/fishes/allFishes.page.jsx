import { useState, useEffect } from 'react';
import { Box, Button, Heading, Image, Text, useToast } from '@chakra-ui/react';
import { ERROR_TOAST_OPTIONS } from '../../constants/constants';
import { getAllFishes } from '../../api/fishes';
import { Link } from 'react-router-dom';

const AllFishes = () => {
  const toast = useToast();
  const [allFishes, setAllFishes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllFishes();

      if (Array.isArray(data) && data[0] === false) {
        return toast({ ...ERROR_TOAST_OPTIONS, title: data[1] });
      }

      setAllFishes(data);
    })();
  }, []);

  return (
    <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap='4rem'>
      {allFishes.map((fish) => (
        <Box key={fish._id} borderRadius='15px' bg='rgba(255, 255, 255, 0.6)' p='1rem' className='floating'>
          <Image src={fish.speciesIllustrationPhoto[0].src} width='75%' margin='0 auto 5px' />

          <Heading as='h3' size='md' textAlign='center' className='heading'>
            {fish.speciesName}
          </Heading>

          <Box textAlign='center'>
            <Link to={`/fishes/${fish._id}`}>
              <Button
                size='md'
                mt='15px'
                bg='#031b4e'
                color='#fff'
                _hover={{ bg: '#041740' }}
                _focus={{ bg: '#041740' }}>
                Details
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AllFishes;
