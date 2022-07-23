import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import React from 'react';
import image from 'assets/images/illustration.jpg';
import ButtonPrimary from 'components/common/ButtonPrimary';

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
          <Heading size={'2xl'}>I am Rachmadzii.</Heading>
          <Text
            lineHeight={'32px'}
            fontWeight={'500'}
            color={'text.gray'}
            maxW={'450px'}
            mb={4}
          >
            I am interested in becoming a frontend developer who builds
            user-friendly websites and becomes a valuable person for others by
            sharing knowledge and insights.
            <br />
            Welcome to <span className="highlight-navy">my space 🚀</span>
          </Text>
          <ButtonPrimary
            cta={'Get to Know Me'}
            align={'start'}
            route={'/about'}
          />
        </Flex>
        <Image src={image} w={'40%'}></Image>
      </Flex>
    </BaseLayout>
  );
}

export default Home;
