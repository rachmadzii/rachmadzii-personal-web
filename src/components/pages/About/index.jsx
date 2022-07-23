import {
  Link,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import React from 'react';
import image from 'assets/images/my_photo.png';
import {
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsDribbble,
  BsTwitter,
  BsGlobe2,
} from 'react-icons/bs';

function About() {
  const data = {
    photo: image,
    name: 'Rachma Adzima Maulida',
    description:
      'I am Rachma, an undergraduate at UPN Veteran Jakarta majoring in Informatics. Welcome to my space on the web; this space will be used to share projects I have made, my writings, and other things I want to share. <br /> Since getting to know technology, I have liked exploring all fields such as UI Design, Web Design, Mobile Development, Web Development, Flutter, and Quality Assurance. Besides, I will never stop learning to increase my knowledge. Sometimes the world goes so fast that I have to keep up!',
    socialMedia: [
      {
        name: 'LinkedIn',
        icon: BsLinkedin,
        link: 'https://www.linkedin.com/in/rachma-adzima/',
      },
      {
        name: 'Instagram',
        icon: BsInstagram,
        link: 'https://www.instagram.com/rachmadzii/',
      },

      {
        name: 'Github',
        icon: BsGithub,
        link: 'https://github.com/rachmadzii',
      },
      {
        name: 'Dribbble',
        icon: BsDribbble,
        link: 'https://dribbble.com/rachmadzii',
      },
      {
        name: 'Twitter',
        icon: BsTwitter,
        link: 'https://twitter.com/rachmadzii',
      },
      {
        name: 'Website',
        icon: BsGlobe2,
        link: 'https://rachmadzii.carrd.co/',
      },
    ],
  };

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
            md: 'content.primary',
          }}
          rowGap={10}
          columnGap={16}
          flexDirection={{ base: 'column', lg: 'row' }}
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
                base: 'text.gray',
                md: 'white',
              }}
              borderRadius={'10px'}
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
              color={{ base: 'content.primary', md: 'white' }}
            >
              {data.name}
            </Heading>
            <Text
              lineHeight={'32px'}
              fontWeight={'500'}
              color={{
                base: 'content.primary',
                md: 'text.gray',
              }}
            >
              {data.description}
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
            <Flex gap={4} flexWrap={'wrap'}>
              {data.socialMedia.map((data) => (
                <Link key={data.name} target="_blank" href={data.link}>
                  <Button
                    p={0}
                    bgColor={'transparent'}
                    _hover={{
                      bgColor: 'transparent',
                    }}
                    _focus={{
                      bgColor: 'transparent',
                    }}
                  >
                    <Icon
                      as={data.icon}
                      boxSize={'32px'}
                      color={{ base: 'content.primary', md: 'white' }}
                    />
                  </Button>
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
