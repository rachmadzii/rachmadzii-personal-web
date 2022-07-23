import { Flex } from '@chakra-ui/react';
import NavigationBar from 'components/common/NavigationBar';
import React from 'react';

function BaseLayout({ children }) {
  return (
    <Flex
      flexDirection={'column'}
      px={{ base: '0', lg: '28' }}
      py={{ base: '0', lg: '8' }}
      h={'100vh'}
    >
      <NavigationBar />
      {children}
    </Flex>
  );
}

export default BaseLayout;
