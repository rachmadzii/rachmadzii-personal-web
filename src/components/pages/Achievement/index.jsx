import { Box, Center, Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import { data } from 'data';
import React from 'react';
import { BsAward, BsLaptop } from 'react-icons/bs';

function Achievement() {
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
            The things I have achieved
          </Text>
          <Heading size={'xl'} color={'content.primary'}>
            My Achievement
          </Heading>
          <Text fontWeight={'400'} color={'text.gray'} maxW={'400px'}>
            I realize that until now, I have not achieved much, but I will
            continue to strive to improve.
          </Text>
        </Flex>
        <CardAchievement />
      </Center>
    </BaseLayout>
  );
}

const CardAchievement = () => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
      }}
      gap={10}
    >
      {data.achievement.map((data) => (
        <Box
          key={data.id}
          p={7}
          borderRadius={'30px'}
          bgColor={'content.background-card'}
          maxW={'317px'}
        >
          <Center
            p={2}
            mb={6}
            bgColor={'content.primary'}
            borderRadius={'12px'}
            boxSize={'56px'}
          >
            <Icon
              as={data.category === 'award' ? BsAward : BsLaptop}
              boxSize={'32px'}
              color={'white'}
            />
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

export default Achievement;
