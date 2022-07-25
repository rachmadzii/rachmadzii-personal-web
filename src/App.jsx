import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import Achievement from 'components/pages/Achievement';
import Experience from 'components/pages/Experience';
import About from 'components/pages/About';
import Blog from 'components/pages/Blog';
import DetailBlog from 'components/pages/Blog/DetailBlog';
import CreateBlog from 'components/pages/Admin/CreateBlog';
import UpdateBlog from 'components/pages/Admin/UpdateBlog';
import Admin from 'components/pages/Admin';
import ListBlog from 'components/pages/Admin/ListBlog';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<DetailBlog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/blog" element={<ListBlog />} />
        <Route path="/admin/blog/create" element={<CreateBlog />} />
        <Route path="/admin/blog/update/:blogId" element={<UpdateBlog />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
