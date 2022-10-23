import { Heading, Box, FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { researcherLogin } from '../api/researchers';
import { ERROR_TOAST_OPTIONS } from '../constants/constants';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const loginHandler = async () => {
    if (!email || !password) {
      return toast({ ...ERROR_TOAST_OPTIONS, title: 'Please fill all of the fields' });
    }

    const loginData = await researcherLogin(email, password);

    if (Array.isArray(loginData) && loginData[0] === false) {
      return toast({ ...ERROR_TOAST_OPTIONS, title: loginData[1] });
    }

    const jwt = loginData.jwt;
    const userData = loginData.researcher;

    console.log(jwt, userData);
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

        <Box>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type='email'
              placeholder='example@test.com'
              style={{
                background: '#ecf0f3',
                padding: '10px',
                paddingLeft: '20px',
                height: '50px',
                fontSize: '14px',
                borderRadius: '50px',
                boxShadow: 'inset 6px 6px 6px #cbced1, inset -6px -6px 6px white',
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl mt='15px'>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              placeholder='Min 8 characters long'
              style={{
                background: '#ecf0f3',
                padding: '10px',
                paddingLeft: '20px',
                height: '50px',
                fontSize: '14px',
                borderRadius: '50px',
                boxShadow: 'inset 6px 6px 6px #cbced1, inset -6px -6px 6px white',
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
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
            onClick={loginHandler}>
            Login
          </Button>

          <Link to='/register'>
            <Button
              size='md'
              m='25px 0 15px'
              bg='#1da1f2'
              color='#fff'
              _hover={{ bg: '#1da1f2' }}
              _focus={{ bg: '#1da1f2' }}
              w='100%'>
              Register
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
