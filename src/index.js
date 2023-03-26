import ReactDOM from 'react-dom';
import React from 'react';
import ButtonWithCounter from './ButtonWithCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ButtonWithCounter buttons={[1,5,-1,-5]} />
  </React.StrictMode>
)