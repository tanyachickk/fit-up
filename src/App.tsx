import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from '@/views/dashboard';
import Diary from '@/views/diary';
import Main from '@/views/main';

const App: React.FC = () => {
  return (
    <Main>
      <Router>
        <Route path='/' exact component={Dashboard} />
        <Route path='/diary' component={Diary} />
      </Router>
    </Main>
  );
};

export default App;
