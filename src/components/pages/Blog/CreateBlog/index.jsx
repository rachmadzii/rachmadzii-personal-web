import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import ButtonPrimary from 'components/common/ButtonPrimary';
import TextEditor from 'components/common/TextEditor';
import BaseLayout from 'components/layout/BaseLayout';
import React, { useState } from 'react';

function CreateBlog() {
  return (
    <BaseLayout>
      <Flex
        px={{ base: 4, md: 14 }}
        py={{ base: 10, lg: 16 }}
        flexDirection={'column'}
        gap={8}
      >
        <Heading size={'xl'} color={'content.primary'} mb={6}>
          Create a New Blog
        </Heading>
        <FormCreate />
        <TextEditor />
        <ButtonPrimary cta={'Submit Article'} align={'start'} />
      </Flex>
    </BaseLayout>
  );
}

const FormCreate = () => {
  const [input, setInput] = useState('Hi');

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === '';

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>Title</FormLabel>
      <Input
        type="email"
        value={input}
        placeholder="Write your article title here"
        onChange={handleInputChange}
      />
      {isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
    </FormControl>
  );
};

export default CreateBlog;
