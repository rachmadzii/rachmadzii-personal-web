import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useBreakpointValue,
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
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'left', md: 'left' })}
            color={'content.primary'}
            fontWeight={'bold'}
            fontSize={'xl'}
          >
            Rachmadzii<span className="dot">.</span>
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={'auto'}
        >
          <Button
            py={'5'}
            px={'7'}
            borderRadius={12}
            fontSize={'sm'}
            fontWeight={600}
            color={'content.secondary'}
            bg={'content.tertiary'}
            href={'#'}
            _hover={{
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
    <Stack direction={'row'} spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
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
