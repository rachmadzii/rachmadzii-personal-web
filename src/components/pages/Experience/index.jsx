import { Box, Center, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import { data } from 'data';
import React from 'react';

function Experience() {
  return (
    <BaseLayout>
      <Center
        px={{ base: 4, md: 14 }}
        py={{ base: 10, lg: 16 }}
        flexDirection={'column'}
        gap={16}
      >
        <Flex flexDirection={'column'} gap={'2'} textAlign={'center'}>
          <Text
            fontWeight={'semibold'}
            fontSize={'lg'}
            color={'content.secondary'}
          >
            Valuable things
          </Text>
          <Heading size={'xl'} color={'content.primary'}>
            My Experience
          </Heading>
          <Text fontWeight={'400'} color={'text.gray'} maxW={'470px'}>
            There have been several activities that I have been through, and all
            of them have been invaluable.
          </Text>
        </Flex>
        <CardExperience />
      </Center>
    </BaseLayout>
  );
}

const CardExperience = () => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(3, 1fr)',
      }}
      gap={16}
    >
      {data.experience.map((data) => (
        <Box key={data.id} maxW={'285px'}>
          <Center
            p={2}
            mb={6}
            bgColor={'content.background-ellips'}
            color={'content.primary'}
            _hover={{
              color: 'white',
              bgColor: 'content.secondary',
            }}
            borderRadius={'50%'}
            boxSize={'60px'}
          >
            <Text fontWeight={'semibold'} fontSize={'xl'}>
              {data.id}
            </Text>
          </Center>
          <Heading
            fontWeight={'semibold'}
            size={'md'}
            lineHeight={'30px'}
            color={'content.primary'}
            mb={2}
          >
            {data.title}
          </Heading>
          <Text fontWeight={'400'} color={'text.gray'}>
            {data.subtitle}
          </Text>
        </Box>
      ))}
    </Grid>
  );
};

export default Experience;
