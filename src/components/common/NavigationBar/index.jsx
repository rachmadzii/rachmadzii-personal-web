import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Achievement',
    href: '/achievement',
  },
  {
    label: 'Experience',
    href: '/experience',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

function NavigationBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex minH={'60px'} p={{ base: 4 }} align={'center'}>
        <Flex ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={'center'}>
          <Text color={'content.primary'} fontWeight={'bold'} fontSize={'xl'}>
            Rachmadzii<span className="highlight-orange">.</span>
          </Text>

          <Flex
            w={'full'}
            justifyContent={'center'}
            display={{ base: 'none', md: 'flex' }}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack justify={'flex-end'} direction={'row'} spacing={'auto'}>
          <Button
            py={'5'}
            px={'7'}
            borderRadius={12}
            fontSize={'sm'}
            fontWeight={600}
            color={'content.secondary'}
            bgColor={'content.tertiary'}
            _hover={{
              bg: 'content.secondary',
              color: 'white',
            }}
            _focus={{
              bg: 'content.secondary',
              color: 'white',
            }}
          >
            Login
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={6} alignItems={'center'}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            href={navItem.href ?? '#'}
            fontWeight={500}
            color={'text.gray'}
            _hover={{
              textDecoration: 'none',
              color: 'content.primary',
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: 'none' }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={500} color={'text.gray'}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

export default NavigationBar;
