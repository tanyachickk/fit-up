import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '@/routes';
import Main from '@/views/main';

import 'reset-css';
import './styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <Main>
        {routes.map((routeOptions, i) => (
          <Route key={i} {...routeOptions} />
        ))}
      </Main>
    </Router>
  );
};

export default App;
