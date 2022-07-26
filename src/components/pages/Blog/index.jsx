import { Center, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import React, { useEffect, useState } from 'react';
import image from 'assets/images/empty_blog.png';
import { getListAllBlog } from 'utils/fetchAPI';
import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Loading from 'components/common/Loading';

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
  const [articles, setArticles] = useState();

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await getListAllBlog();
        setArticles(response);
      } catch (e) {
        alert(e);
      }
    };
    getArticle();
  }, []);

  return (
    <Flex flexDirection={'column'} gap={10} w={'100%'}>
      {articles ? (
        <>
          {articles.length === 0 && (
            <EmptyBlog cta={'No articles are available yet'} />
          )}
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
                <Text noOfLines={2} color={'content.primary'}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(data.content, {
                        FORCE_BODY: true,
                      }),
                    }}
                  />
                </Text>
                <Flex alignItems={'center'} gap={3}>
                  <Icon as={FcLike} boxSize={'36px'} />
                  <Text mt={1} fontWeight={'500'} color={'content.primary'}>
                    {data.like} loved this
                  </Text>
                </Flex>
                <Link className={'link-read'} to={`/blog/${data.id}`}>
                  Read Now {'>'}
                </Link>
              </Flex>
            </Flex>
          ))}
        </>
      ) : (
        <Loading />
      )}
    </Flex>
  );
};

const EmptyBlog = ({ cta }) => {
  return (
    <Flex flexDirection={'column'} gap={2} alignItems={'center'}>
      <Image src={image} alt={'Empty Blog'} maxW={'230px'} />
      <Text textAlign={'center'}>{cta}</Text>
    </Flex>
  );
};

export default Blog;
