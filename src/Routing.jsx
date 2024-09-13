import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page from './components/Page/Page';
import PageNotFound from './components/PageNotFound/PageNotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/page" element={<Page />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
