import { Heading, Box, FormControl, FormLabel, Textarea, Button, useToast, FormHelperText } from '@chakra-ui/react';
import { useState } from 'react';
import { createFish } from '../api/fishes';
import { useNavigate } from 'react-router-dom';
import { ERROR_TOAST_OPTIONS, SUCCESS_TOAST_OPTIONS } from '../constants/constants';

function AddFishData() {
  const [fishData, setFishData] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const addFishHandler = async () => {
    if (!fishData) {
      return toast({ ...ERROR_TOAST_OPTIONS, title: 'Please provide correct data' });
    }

    const data = await createFish(JSON.parse(fishData));

    if (Array.isArray(data) && data[0] === false) {
      return toast({ ...ERROR_TOAST_OPTIONS, title: data[1] });
    }

    toast({ ...SUCCESS_TOAST_OPTIONS, title: 'Fish added successfully' });

    return navigate('/encyclopedia');
  };

  return (
    <Box
      h='100vh'
      w='100%'
      bgImage='https://media.istockphoto.com/photos/colorful-coral-reef-with-many-fishes-picture-id508960998?b=1&k=20&m=508960998&s=170667a&w=0&h=rgX09SkfLgZf8JrHYCHRwll6zLUhKI0HiZz1bMsLc0E='
      bgSize='cover'
      display='flex'
      alignItems='center'
      justifyContent='center'>
      <Box bg='#ecf0f3' minHeight='30rem' borderRadius='5px' w='28rem' p='1.75rem 2.5rem'>
        <Heading as='h1' className='heading' color='#031b4e' mb='10' textAlign='center' fontSize='4xl'>
          ScOObaDive
        </Heading>
        <Heading as='h2' className='heading' color='#031b4e' mb='10' textAlign='center' fontSize='2xl'>
          Add Fish Data
        </Heading>

        <Box>
          <FormControl>
            <FormLabel>Fish Data (valid JSON)</FormLabel>
            <Textarea
              type='text'
              style={{
                background: '#ecf0f3',
                padding: '10px',
                paddingLeft: '20px',
                height: '50px',
                fontSize: '14px',
                borderRadius: '15px',
                boxShadow: 'inset 6px 6px 6px #cbced1, inset -6px -6px 6px white',
              }}
              onChange={(e) => setFishData(e.target.value)}
            />
            <FormHelperText>We are working on other data formats</FormHelperText>
          </FormControl>

          <Button
            size='md'
            mt='30px'
            bg='transparent'
            border='2px solid #1da1f2'
            color='#031b4e'
            _hover={{ bg: '#1da1f2', color: '#fff' }}
            _focus={{ bg: '#1da1f2', color: '#fff' }}
            w='100%'
            onClick={addFishHandler}>
            Add Data
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddFishData;
