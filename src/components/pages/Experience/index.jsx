import { Box, Center, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
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
  const achievement = [
    {
      id: '01',
      title: 'Frontend Engineer at Dietela Indonesia',
      subtitle:
        'I am responsible for developing Nutritional Mini Assessment App for Dietela users, using React JS and Chakra UI.',
    },
    {
      id: '02',
      title: 'Mobile Developer at Agreeculture Telkom',
      subtitle:
        'I am responsible for developing the Super App for Integrated Farming, which will be used for Agrees users and partners.',
    },
    {
      id: '03',
      title: 'Website Designer at BuildWith Angga',
      subtitle:
        'I am responsible for developing, implementing, and slicing UI Design into Website elements using HTML, CSS Bootstrap 5, and Blade Laravel.',
    },
    {
      id: '04',
      title: 'Class Operation at Harisenin.com',
      subtitle:
        'I am responsible for being a moderator and facilitator in a class Fullstack Developer, organize mentees documentation and reports.',
    },
    {
      id: '05',
      title: 'UI/UX Design at Digitalent Professional Academy',
      subtitle:
        'The awardee of Professional Academy Digitalent Scholarship in the field of UI/UX Design. I also participated in Skilvul UI/UX Challenge Mentor On Demand.',
    },
    {
      id: '06',
      title: 'Frontend Engineer at Generasi GIGIH 2.0',
      subtitle:
        'Participant of Generasi GIGIH 2.0 Independent Study. Motivated on the Frontend Engineer Track that learns React JS, TypeScript, GIT, and more.',
    },
  ];

  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(3, 1fr)',
      }}
      gap={16}
    >
      {achievement.map((data) => (
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
