import { useState, useEffect } from 'react';
import { Box, Button, Heading, Image, Text, useToast } from '@chakra-ui/react';
import { ERROR_TOAST_OPTIONS } from '../../constants/constants';
import { getAllFishes } from '../../api/fishes';
import { Link } from 'react-router-dom';
import Navbar from '../../components/GeneralComp/Navbar';

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
    <>
      <Navbar />
      <Box
        display='grid'
        gridTemplateColumns='repeat(4, 1fr)'
        gap='4rem'
        margin='10'
        borderRadius='15px'
        bg='rgba(255, 255, 255, 0.6)'
        p='1rem'
        w='98%'
        m='auto'
        background='rgba(0, 0, 0, .2)'
        mt='8'>
        {allFishes.map((fish) => (
          <Box
            key={fish._id}
            borderRadius='15px'
            bg='rgba(255, 255, 255, 0.6)'
            p='1rem'
            display='flex'
            flexDirection='column'>
            <Image src={fish.speciesIllustrationPhoto[0].src} width='75%' margin='0 auto 5px' />

            <Heading as='h3' size='md' textAlign='center' className='heading' mt='auto'>
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
    </>
  );
};

export default AllFishes;
