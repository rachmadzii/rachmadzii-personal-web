import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import Achievement from 'components/pages/Achievement';
import Experience from 'components/pages/Experience';
import About from 'components/pages/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/achievement" element={<Achievement />} exact />
        <Route path="/experience" element={<Experience />} exact />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
