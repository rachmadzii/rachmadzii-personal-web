import { Button, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import React, { useEffect, useState } from 'react';
import image from 'assets/images/cat_blog.png';
import { getListAllBlog, likeBlog } from 'utils/fetchAPI';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import Loading from 'components/common/Loading';

function DetailBlog() {
  const [articles, setArticles] = useState();
  const params = useParams();

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await getListAllBlog();
        const articleFound = response.find(
          (response) => response.id === params.blogId
        );
        if (articleFound) setArticles(articleFound);
        else alert('Article not found ⛔');
      } catch (e) {
        alert(e);
      }
    };
    getArticle();
  }, [params.blogId]);

  return (
    <BaseLayout>
      {articles ? (
        <Flex
          px={{ base: 4, md: 14 }}
          py={{ base: 10, lg: 16 }}
          flexDirection={'column'}
          gap={12}
        >
          <Heading size={'xl'} color={'content.primary'}>
            {articles.title}
          </Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(articles.content, {
                FORCE_BODY: true,
              }),
            }}
          />
          <LikeSection totalLike={articles.like} id={articles.id} />
        </Flex>
      ) : (
        <Loading />
      )}
    </BaseLayout>
  );
}

const LikeSection = ({ totalLike, id }) => {
  const [isLike, setIsLike] = useState(false);
  const [like, setLike] = useState(totalLike);

  const handleAlreadyLike = () => alert('You already loved this article 💖');

  const handleLike = async () => {
    setIsLike(true);
    try {
      const response = await likeBlog(id);
      setLike(response.like);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Flex
      flexDirection={{
        base: 'column',
        md: 'row',
      }}
      alignItems={'center'}
    >
      <Image
        src={image}
        w={{
          base: '214px',
          md: '249px',
        }}
        h={{
          base: '120px',
          md: '140px',
        }}
      />
      <Flex
        p={10}
        gap={6}
        w={'full'}
        flexDirection={'column'}
        bgColor={'content.background-card'}
        borderRadius={'15px'}
      >
        <Heading
          fontWeight={'semibold'}
          fontSize={'xl'}
          color={'content.primary'}
          lineHeight={'32px'}
        >
          Was the following article helpful?
        </Heading>
        <Flex alignItems={'center'} gap={3}>
          <Button
            p={0}
            bgColor={'transparent'}
            _hover={{
              bgColor: 'transparent',
            }}
            _focus={{
              bgColor: 'transparent',
            }}
            onClick={!isLike ? handleLike : handleAlreadyLike}
          >
            {isLike ? (
              <Icon as={FcLike} boxSize={'36px'} />
            ) : (
              <Icon as={FcLikePlaceholder} boxSize={'36px'} />
            )}
          </Button>
          <Text mt={1} fontWeight={'500'} color={'content.primary'}>
            {like} loved this
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DetailBlog;
