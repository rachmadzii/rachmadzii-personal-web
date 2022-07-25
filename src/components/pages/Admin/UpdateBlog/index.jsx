/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import BaseLayout from 'components/layout/BaseLayout';
import React, { useEffect, useState } from 'react';
import { getListAllBlog, updateBlog } from 'utils/fetchAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Loading from 'components/common/Loading';

function UpdateBlog() {
  const [articles, setArticles] = useState();
  const params = useParams();

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await getListAllBlog();
        const articleFound = response.find(
          (response) => response.id === params.blogId
        );
        if (articleFound) setArticles(articleFound);
        else alert('Article not found ⛔');
      } catch (e) {
        alert(e);
      }
    };
    getArticle();
  }, []);

  return (
    <BaseLayout>
      {articles ? (
        <Flex
          px={{ base: 4, md: 14 }}
          py={{ base: 10, lg: 16 }}
          flexDirection={'column'}
          gap={12}
        >
          <Heading size={'xl'} color={'content.primary'}>
            Update Blog
          </Heading>
          <FormUpdate
            oldTitle={articles.title}
            oldContent={articles.content}
            id={articles.id}
          />
        </Flex>
      ) : (
        <Loading />
      )}
    </BaseLayout>
  );
}

const FormUpdate = ({ oldTitle, oldContent, id }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(oldTitle);
  const [content, setContent] = useState(oldContent);

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
        await updateBlog(title, content, id);

        alert('Success updated your article; Thank you 👋');
        navigate('/admin/blog');
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

export default UpdateBlog;
