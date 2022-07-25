import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import React from 'react';
import image from 'assets/images/illustration.jpg';
import ButtonNavigate from 'components/common/ButtonNavigate';
import { data } from 'data';

function Home() {
  return (
    <BaseLayout>
      <Flex
        px={{ base: 4, md: 14 }}
        py={{ base: 10, lg: 0 }}
        columnGap={5}
        rowGap={12}
        flexGrow={1}
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
        justifyContent={{ base: 'start', lg: 'space-between' }}
        alignItems={'center'}
      >
        <Flex flexDirection={'column'} gap={5}>
          <Text
            fontWeight={'semibold'}
            fontSize={'xl'}
            color={'content.secondary'}
          >
            Hello World! 👋
          </Text>
          <Heading size={'2xl'} lineHeight={'56px'}>
            {data.title}
          </Heading>
          <Text
            lineHeight={'32px'}
            fontWeight={'500'}
            color={'text.gray'}
            maxW={'450px'}
            mb={4}
          >
            {data.description}
            <br />
            Welcome to <span className="highlight-navy">my space 🚀</span>
          </Text>
          <ButtonNavigate
            cta={'Get to Know Me'}
            align={'start'}
            path={'/about'}
          />
        </Flex>
        <Image src={image} w={'40%'}></Image>
      </Flex>
    </BaseLayout>
  );
}

export default Home;
