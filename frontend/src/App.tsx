import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => (
  <ChakraProvider>
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" exact component={Chat} />
    </Router>
  </ChakraProvider>
);

export default App;
