import {
  Avatar,
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

const Signup = () => {
  return (
    <MotionContainer
      maxW={'container.xl'}
      h={'100vh'}
      p={'16'}
      mb={'40'}
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
          {/* Animated Heading */}
          <Heading
            fontSize="4xl"
            textAlign={'center'}
            color="blue.500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            VIDEO HUB
          </Heading>

          {/* Avatar */}
          <Avatar alignSelf={'center'} boxSize={'32'} />

          {/* Name Input with Focus Effect */}
          <MotionInput
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
            initial={{ scale: 1 }}
            whileFocus={{ scale: 1.05 }}
            transition="all 0.2s ease"
          />

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

          {/* Sign-Up Button with Hover Animation */}
          <MotionButton
            colorScheme={'purple'}
            type={'submit'}
            whileHover={{ scale: 1.1 }}
            transition="all 0.3s ease"
          >
            Sign Up
          </MotionButton>

          {/* Login Button with Hover Effect */}
          <Text textAlign={'right'} fontSize={'md'}>
            Already Signed Up?{' '}
            <MotionButton
              variant={'link'}
              colorScheme={'purple'}
              whileHover={{ scale: 1.2 }}
              transition="all 0.3s ease"
            >
              <Link to={'/login'}>Login In</Link>
            </MotionButton>
          </Text>
        </VStack>
      </form>
    </MotionContainer>
  );
};

export default Signup;
