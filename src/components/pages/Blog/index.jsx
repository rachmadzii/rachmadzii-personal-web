import {
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
} from '@chakra-ui/react';
import ButtonPrimary from 'components/common/ButtonPrimary';
import BaseLayout from 'components/layout/BaseLayout';
import React from 'react';
import { FiEdit } from 'react-icons/fi';

function Blog() {
  return (
    <BaseLayout>
      <Center
        px={{ base: 4, md: 14 }}
        py={{ base: 10, lg: 16 }}
        flexDirection={'column'}
        gap={16}
      >
        <Flex flexDirection={'column'} gap={2} textAlign={'center'}>
          <Text
            fontWeight={'semibold'}
            fontSize={'lg'}
            color={'content.secondary'}
          >
            Something helpful
          </Text>
          <Heading size={'xl'} color={'content.primary'}>
            Great Articles
          </Heading>
          <Text fontWeight={'400'} color={'text.gray'}>
            Are you looking for some helpful reading? Here it is!
          </Text>
        </Flex>
        <ListBlog />
      </Center>
    </BaseLayout>
  );
}

const ListBlog = () => {
  const articles = [
    {
      id: '1',
      title: 'Hello World Blog',
      like: 10,
    },
    {
      id: '2',
      title: 'This is My First Blog',
      like: 20,
    },
  ];

  return (
    <Flex flexDirection={'column'} gap={10} w={'100%'}>
      <ButtonPrimary
        cta={'Create an Article'}
        align={'end'}
        route={'/create-blog'}
        withIcon
      />
      {articles.map((data) => (
        <Flex
          key={data.id}
          p={{
            base: 6,
            md: 10,
          }}
          gap={6}
          flexDirection={{
            base: 'column-reverse',
            md: 'row',
          }}
          bgColor={'content.background-card'}
          borderRadius={'15px'}
          justifyContent={'space-between'}
        >
          <Flex gap={6} flexDirection={'column'}>
            <Heading
              fontWeight={'semibold'}
              fontSize={'28px'}
              color={'content.primary'}
              lineHeight={'40px'}
            >
              {data.title}
            </Heading>
            <Flex alignItems={'center'} gap={3}>
              <Icon
                viewBox={'0 0 28 28'}
                width={'28px'}
                height={'28px'}
                fill={'transparent'}
              >
                <path
                  d="M8.74992 4.66667C5.20617 4.66667 2.33325 7.53958 2.33325 11.0833C2.33325 17.5 9.91659 23.3333 13.9999 24.6902C18.0833 23.3333 25.6666 17.5 25.6666 11.0833C25.6666 7.53958 22.7937 4.66667 19.2499 4.66667C17.0799 4.66667 15.1608 5.74408 13.9999 7.39317C13.4082 6.55037 12.6222 5.86255 11.7083 5.38795C10.7944 4.91335 9.77968 4.66594 8.74992 4.66667Z"
                  stroke="#1B2028"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Icon>
              <Text fontWeight={'500'} color={'content.primary'}>
                {data.like} loved this
              </Text>
            </Flex>
            <Link
              fontWeight={'500'}
              color={'content.secondary'}
              _hover={{ textDecoration: 'none' }}
              href={'/detail-blog'}
            >
              Read Now {'>'}
            </Link>
          </Flex>
          <ButtonUpdate />
        </Flex>
      ))}
    </Flex>
  );
};

const ButtonUpdate = () => {
  return (
    <Button
      boxSize={'50px'}
      bgColor={'white'}
      _hover={{
        bgColor: 'white',
      }}
      _focus={{
        bgColor: 'white',
      }}
      alignSelf={'start'}
    >
      <Icon as={FiEdit} boxSize={'24px'} color={'content.primary'} />
    </Button>
  );
};

export default Blog;
