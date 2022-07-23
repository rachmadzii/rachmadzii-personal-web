import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import React from 'react';
import image from 'assets/images/cat_blog.png';

function DetailBlog() {
  return (
    <BaseLayout>
      <Flex
        px={{ base: 4, md: 14 }}
        py={{ base: 10, lg: 16 }}
        flexDirection={'column'}
        gap={14}
      >
        <Box>
          <Heading size={'xl'} mb={4}>
            This is My First Blog
          </Heading>
          <Text fontSize={'lg'} color={'content.primary'}>
            Author <span className="highlight-orange">Rachma Adzima</span>
          </Text>
        </Box>
        <Text lineHeight={'34px'} color={'content.primary'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </Text>
        <LikeSection />
      </Flex>
    </BaseLayout>
  );
}

const LikeSection = () => {
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
          <Icon
            viewBox={'0 0 36 36'}
            width={'36px'}
            height={'36px'}
            fill={'transparent'}
          >
            <path
              d="M11.25 6C6.69375 6 3 9.69375 3 14.25C3 22.5 12.75 30 18 31.7445C23.25 30 33 22.5 33 14.25C33 9.69375 29.3062 6 24.75 6C21.96 6 19.4925 7.38525 18 9.5055C17.2393 8.42191 16.2286 7.53757 15.0536 6.92737C13.8787 6.31716 12.574 5.99907 11.25 6Z"
              stroke="#1B2028"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>
          <Text fontWeight={'500'} color={'content.primary'}>
            10 loved this
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DetailBlog;
