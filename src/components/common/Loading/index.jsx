import { CircularProgress, Flex } from '@chakra-ui/react';
import React from 'react';

function Loading() {
  return (
    <Flex h={'full'} justifyContent={'center'} alignItems={'center'}>
      <CircularProgress
        isIndeterminate
        color={'content.secondary'}
        size={'100px'}
        thickness={'4px'}
      />
    </Flex>
  );
}

export default Loading;
