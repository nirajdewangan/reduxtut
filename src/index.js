import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

// ReactDOM.render(<App />, rootElement);
