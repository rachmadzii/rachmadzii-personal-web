import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState } from 'react';
import { createBlog } from 'utils/fetchAPI';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  return (
    <BaseLayout>
      <Flex
        px={{ base: 4, md: 14 }}
        py={{ base: 10, lg: 16 }}
        flexDirection={'column'}
        gap={12}
      >
        <Heading size={'xl'} color={'content.primary'}>
          Create a New Blog
        </Heading>
        <FormCreate />
      </Flex>
    </BaseLayout>
  );
}

const FormCreate = () => {
  const navigate = useNavigate();
  const contentDefault = '<p>Write your article content here</p>';

  const [title, setTitle] = useState('');
  const [content, setContent] = useState(contentDefault);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (event, editor) => {
    setContent(editor.getData());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === '' || content === '') {
      alert('Please complete your article data 😊');
    } else {
      try {
        await createBlog(title, content);

        alert('Success published your article; Thank you 👋');
        navigate('/blog');
      } catch (e) {
        alert(e);
      }
    }
  };

  return (
    <FormControl>
      <FormLabel>Title</FormLabel>
      <Input
        mb={8}
        type="text"
        value={title}
        placeholder="Write your article title here"
        onChange={handleTitleChange}
      />
      <FormLabel>Content</FormLabel>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={handleDescriptionChange}
      />
      <Button
        mt={8}
        py={6}
        px={7}
        w={{
          base: 'full',
          md: 'auto',
        }}
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
        onClick={handleSubmit}
      >
        Publish
      </Button>
    </FormControl>
  );
};

export default CreateBlog;
