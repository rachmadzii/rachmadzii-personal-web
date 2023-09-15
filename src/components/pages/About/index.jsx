import { Link, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import React from 'react';

import DOMPurify from 'dompurify';
import { data } from 'data';

function About() {
  return (
    <BaseLayout>
      <Flex
        py={6}
        px={{ base: 0, md: 4, lg: 0 }}
        flexGrow={1}
        alignItems={'center'}
      >
        <Flex
          bgColor={{
            base: 'white',
          }}
          rowGap={10}
          columnGap={16}
          flexDirection={{ base: 'column', xl: 'row' }}
          p={{
            base: 4,
            md: 14,
          }}
          borderRadius={'30px'}
        >
          <Flex flexDirection={'column'} gap={3}>
            <Text
              fontWeight={'semibold'}
              fontSize={'md'}
              color={'content.secondary'}
            >
              Hi, this is me XD
            </Text>
            <Image
              src={data.photo}
              maxW={'260px'}
              maxH={'260px'}
              p={1}
              border={'1px'}
              borderColor={{
                base: 'content.primary',
              }}
              borderRadius={'12px'}
            />
            <Text
              fontWeight={'semibold'}
              fontSize={'md'}
              color={'content.secondary'}
            >
              Some people called me Ama.
            </Text>
          </Flex>
          <Flex flexDirection={'column'} gap={3}>
            <Text
              fontWeight={'semibold'}
              fontSize={'xl'}
              color={'content.secondary'}
            >
              About Me
            </Text>
            <Heading
              size={'xl'}
              color={'content.primary'}
            >
              {data.name}
            </Heading>
            <Text
              lineHeight={'32px'}
              fontWeight={'500'}
              color={'content.primary'}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.about, {
                    FORCE_BODY: true,
                  }),
                }}
              />
            </Text>
            <Text
              mt={6}
              mb={2}
              fontWeight={'semibold'}
              fontSize={'xl'}
              color={'content.secondary'}
            >
              Find me on Social Media
            </Text>
            <Flex gap={6} flexWrap={'wrap'}>
              {data.socialMedia.map((data) => (
                <Link key={data.name} target="_blank" href={data.link}>
                  <Icon
                    as={data.icon}
                    boxSize={'32px'}
                    color={'content.primary'}
                  />
                </Link>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </BaseLayout>
  );
}

export default About;
