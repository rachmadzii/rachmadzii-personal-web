import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import React from 'react';
import image from 'assets/images/illustration.jpg';

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
          >
            I am interested in becoming a frontend developer who builds
            user-friendly websites and becomes a valuable person for others by
            sharing knowledge and insights.
            <br />
            Welcome to <span className="highlight">my space 🚀</span>
          </Text>
          <Button
            href={'#'}
            py={'5'}
            px={'7'}
            mt={'4'}
            alignSelf={'start'}
            borderRadius={12}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'content.secondary'}
            _hover={{
              bg: 'content.tertiary',
              color: 'content.secondary',
            }}
          >
            Get to know me
          </Button>
        </Flex>
        <Image src={image} w={'40%'}></Image>
      </Flex>
    </BaseLayout>
  );
}

export default Home;
