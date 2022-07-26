import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonNavigate({ cta, align, path, withIcon }) {
  const navigate = useNavigate();

  return (
    <Button
      py={6}
      px={7}
      w={{
        base: 'full',
        md: 'auto',
      }}
      alignSelf={align}
      borderRadius={12}
      fontSize={'md'}
      fontWeight={600}
      color={'white'}
      bgColor={'content.secondary'}
      _hover={{
        bg: 'content.tertiary',
        color: 'content.secondary',
      }}
      _focus={{
        bg: 'content.tertiary',
        color: 'content.secondary',
      }}
      gap={2}
      leftIcon={withIcon && <AddIcon />}
      onClick={() => navigate(`${path}`)}
    >
      {cta}
    </Button>
  );
}

export default ButtonNavigate;
