import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Achievement',
    path: '/achievement',
  },
  {
    label: 'Experience',
    path: '/experience',
  },
  {
    label: 'Blog',
    path: '/blog',
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
            justifyContent={'end'}
            display={{ base: 'none', md: 'flex' }}
          >
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={7} alignItems={'center'}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <NavLink
            to={navItem.path}
            className={({ isActive }) => (isActive ? 'nav-active' : 'nav-link')}
          >
            {navItem.label}
          </NavLink>
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

const MobileNavItem = ({ label, children, path }) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex py={2} as={NavLink} to={path} className={'nav-link'}>
        <Text fontWeight={500} color={'text.gray'}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

export default NavigationBar;
