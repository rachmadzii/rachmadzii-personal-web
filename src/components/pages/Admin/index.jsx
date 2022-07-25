import { Flex, Heading, Text } from '@chakra-ui/react';
import ButtonNavigate from 'components/common/ButtonNavigate';
import BaseLayout from 'components/layout/BaseLayout';
import React from 'react';

function Admin() {
  return (
    <BaseLayout>
      <Flex
        px={{ base: 4, md: 0 }}
        py={{ base: 10, lg: 0 }}
        justifyContent={'center'}
        alignItems={'center'}
        h={'full'}
      >
        <Flex
          flexDirection={'column'}
          maxW={'400px'}
          bgColor={'content.background-card'}
          p={10}
          gap={5}
          borderRadius={'30px'}
        >
          <Heading size={'lg'} color={'content.primary'}>
            Blog System
          </Heading>
          <Text color={'text.gray'} maxW={'450px'}>
            Are you Admin of this website? Please login to manage your blog.
          </Text>
          <ButtonNavigate cta={'Log In'} align={'start'} path={'/admin/blog'} />
        </Flex>
      </Flex>
    </BaseLayout>
  );
}

export default Admin;
