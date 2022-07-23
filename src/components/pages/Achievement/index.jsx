import { Box, Center, Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import React from 'react';
import { BsAward, BsLaptop } from 'react-icons/bs';

function Achievement() {
  const achievement = [
    {
      id: 1,
      category: 'award',
      title: '3rd Winner Competitive Programming',
      subtitle: 'Slashcomp BEMF-IK UPN Veteran Jakarta on 2021.',
    },
    {
      id: 2,
      category: 'award',
      title: 'Awarded as Best Mardhika Staff',
      subtitle: 'BEM UPN Veteran Jakarta in July 2021.',
    },
    {
      id: 3,
      category: 'webinar',
      title: 'Webinar Speaker at BISA AI Academy',
      subtitle:
        'Headed up two webinars on the topics of Creating ToDo App using PHP and MySQL, also Berkenalan Dengan Dart.',
    },
    {
      id: 4,
      category: 'webinar',
      title: 'Webinar Speaker at BuildWith Angga',
      subtitle:
        'Headed up webinars on the topics of Implement UI Design into a Website with HTML and CSS Bootstrap 5.',
    },
  ];

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
          <Heading size={'xl'} color={'text.navy'}>
            My Achievement
          </Heading>
          <Text fontWeight={'400'} color={'text.gray'} maxW={'400px'}>
            I realize that until now, I have not achieved much, but I will
            continue to strive to improve.
          </Text>
        </Flex>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={10}
        >
          {achievement.map((data) => (
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
              <Text
                fontWeight={'semibold'}
                fontSize={'xl'}
                color={'text.navy'}
                mb={2}
              >
                {data.title}
              </Text>
              <Text fontWeight={'400'} color={'text.gray'}>
                {data.subtitle}
              </Text>
            </Box>
          ))}
        </Grid>
      </Center>
    </BaseLayout>
  );
}

export default Achievement;
