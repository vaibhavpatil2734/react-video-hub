import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionContainer = motion(Container);
const MotionButton = motion(Button);
const MotionInput = motion(Input);

const Login = () => {
  return (
    <MotionContainer
      maxW={'container.xl'}
      h={'100vh'}
      p={'16'}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
          p={8}
          bg="gray.900"
          rounded={'lg'}
          shadow="lg"
        >
          {/* Heading Animation */}
          <Heading
              fontSize="4xl"
              textAlign={'center'}
              color="blue.500"  // Updated the color to blue
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              Welcome Back
          </Heading>


          {/* Email Input with Focus Effect */}
          <MotionInput
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
            initial={{ scale: 1 }}
            whileFocus={{ scale: 1.05 }}
            transition="all 0.2s ease"
          />

          {/* Password Input with Focus Effect */}
          <MotionInput
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
            initial={{ scale: 1 }}
            whileFocus={{ scale: 1.05 }}
            transition="all 0.2s ease"
          />

          {/* Forget Password Button */}
          <MotionButton
            variant={'link'}
            alignSelf={'flex-end'}
            whileHover={{ scale: 1.2, textShadow: '0 0 15px #D633FF' }}
            transition="all 0.3s ease"
          >
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </MotionButton>

          {/* Log In Button */}
          <MotionButton
            colorScheme={'purple'}
            type={'submit'}
            whileHover={{ scale: 1.1 }}
            transition="all 0.3s ease"
          >
            Log In
          </MotionButton>

          {/* Sign-Up Text */}
          <Text textAlign={'right'} fontSize={'md'}>
           {' '}
            <MotionButton
              variant={'link'}
              colorScheme={'purple'}
              whileHover={{ scale: 1.2 }}
              transition="all 0.3s ease"
            >
              <Link to={'/signup'}>Sign Up</Link>
            </MotionButton>
          </Text>
        </VStack>
      </form>
    </MotionContainer>
  );
};

export default Login;
